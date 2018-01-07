require('./BlockRoute.css');

import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { SyntheticEvent } from 'react';

import { BlockModel } from '../../models/BlockModel';
import { Header } from '../../components/header/Header';
import { MiningLoader } from '../../components/mining_loader/MiningLoader';

export interface BlockRouteProps extends RouteComponentProps<any> {
    model?: BlockModel
}

interface BlockRouteState {
    blockStatus: string,
    isMining:    boolean,
    sequenceId:  number,
    nonce:       number,
    data:        string,
    hashValue:   string
}

export class BlockRoute extends React.Component<BlockRouteProps, BlockRouteState> {
    public static readonly STATUS_VALID   = 'VALID';
    public static readonly STATUS_INVALID = 'INVALID';

    public constructor(props: BlockRouteProps) {
        super(props);
        this.state = {
            blockStatus: BlockRoute.STATUS_INVALID,
            isMining:    false,
            nonce:       this.props.model.getNonce(),
            sequenceId:  this.props.model.getSequenceId(),
            data:        '',
            hashValue:   ''
        };
        this.props.model.setData('');
        document.title = 'Block | Blockchain Demo';
    }

    public async componentWillMount() {
        const hash = await this.props.model.getHashValue();
        this.setState({hashValue: hash});
    }

    public render() {
        return (
            <div>
                <Header {...this.props} />
                <div className='container block-route'>
                    <div className='row'><div className='col-md-8 col-md-offset-2'>
                        <div className='card'>
                            <div className='card-header'>
                                <h3>Block</h3>
                            </div>
                            <div className='card-main'>
                                <div className='form-group'>
                                    <label>Sequence ID</label>
                                    <input type="text" className='form-control sequence-id'
                                           name="sequence-id"
                                           value={this.state.sequenceId} disabled/>
                                </div>
                                <div className='form-group'>
                                    <label>Nonce</label>
                                    <input type="text" className='form-control nonce'
                                           name="nonce"
                                           value={this.state.nonce} disabled/>
                                </div>
                                <div className='form-group'>
                                    <label>Data</label>
                                    <textarea className='form-control data-input'
                                              name="data-input"
                                              value={this.state.data}
                                              onChange={this.handleTextareaChange}/>
                                </div>
                                <div className='form-group'>
                                    <label>Hash</label>
                                    <input type="text" className='form-control hash-value'
                                           name="hash-value"
                                           value={this.state.hashValue} disabled/>
                                </div>
                            </div>
                            <div className='card-actions text-center'>
                                <div className='status-label'>
                                    Status: <span className='status-value'>{this.state.blockStatus}</span>
                                </div>
                                <input type="button" className="btn btn-primary" value="Mine"
                                       onClick={this.handleMineClick}/>
                                {this.renderMiningLoader()}
                            </div>
                        </div>
                    </div></div>
                </div>
            </div>
        );
    }

    private renderMiningLoader = () => {
        if(this.state.isMining) {
            return (<MiningLoader/>);
        }
        else {
            return null;
        }
    };

    private handleTextareaChange = async (event: SyntheticEvent<EventTarget>) => {
        const data = event.target['value'];
        this.props.model.setData(data);
        const [hash, status] = await Promise.all([ this.props.model.getHashValue(), this.getStatus() ]);
        this.setState({data: data, hashValue: hash, blockStatus: status});
    };

    private handleMineClick = async () => {
        this.setState({isMining: true});
        const nonce = await this.props.model.findNonce();
        const [hash, status] = await Promise.all([ this.props.model.getHashValue(), this.getStatus() ]);
        this.setState({nonce: nonce, hashValue: hash, blockStatus: status, isMining: false});
    };

    private async getStatus(): Promise<string> {
        const hashIsValid = await this.props.model.hashIsValid();
        const status = hashIsValid ? BlockRoute.STATUS_VALID : BlockRoute.STATUS_INVALID;
        return status;
    }
}
