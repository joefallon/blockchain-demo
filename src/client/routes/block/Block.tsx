import { SyntheticEvent } from 'react';

require('./Block.css');

import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { BlockModel } from '../../models/BlockModel';
import { Header } from '../../components/header/Header';
import { MiningLoader } from '../../components/mining_loader/MiningLoader';

// import Worker = require('worker-loader!../../domain/Fibonacci.worker');
// import * as workerPath from "file-loader?name=[name].js!./Fibonacci.worker";
// console.log(workerPath);
// const worker = new Worker(workerPath);


// import workerFarm = require('worker-farm');
// const workers = workerFarm(require.resolve('../../domain/Fibonacci'));
// const workerpool = require('workerpool');
// const pool = workerpool.pool();

import Parallel = require('paralleljs');


import fibonacci = require('../../domain/Fibonacci');


export interface BlockProps extends RouteComponentProps<any> {
    model?: BlockModel
}

interface BlockState {
    blockStatus: string,
    isMining:    boolean,
    sequenceId:  number,
    nonce:       number,
    data:        string,
    hashValue:   string
}

export class Block extends React.Component<BlockProps, BlockState> {
    public static readonly STATUS_VALID   = 'VALID';
    public static readonly STATUS_INVALID = 'INVALID';

    public constructor(props: BlockProps) {
        super(props);
        this.state = {
            blockStatus: Block.STATUS_INVALID,
            isMining:    false,
            nonce:       this.props.model.getNonce(),
            sequenceId:  this.props.model.getSequenceId(),
            data:        '',
            hashValue:   ''
        };
        this.props.model.setData('');
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
                                           value={this.state.sequenceId} disabled/>
                                </div>
                                <div className='form-group'>
                                    <label>Nonce</label>
                                    <input type="text" className='form-control nonce'
                                           value={this.state.nonce} disabled/>
                                </div>
                                <div className='form-group'>
                                    <label>Data</label>
                                    <textarea className='form-control data-input'
                                              value={this.state.data}
                                    onChange={this.handleTextareaChange}/>
                                </div>
                                <div className='form-group'>
                                    <label>Hash</label>
                                    <input type="text" className='form-control hash-value'
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
        const hash = await this.props.model.getHashValue();
        const hashIsValid = await this.props.model.hashIsValid();
        const status = hashIsValid ? Block.STATUS_VALID : Block.STATUS_INVALID;

        this.setState({data: data, hashValue: hash, blockStatus: status});
    };

    private handleMineClick = async () => {
        this.setState({isMining: true});
        // const nonce = await this.props.model.findNonce();
        // const hash = await this.props.model.getHashValue();
        // const hashIsValid = await this.props.model.hashIsValid();
        // const status = hashIsValid ? Block.STATUS_VALID : Block.STATUS_INVALID;
        //
        // this.setState({nonce: nonce, hashValue: hash, blockStatus: status, isMining: false});


        // worker.addEventListener('message', (ev: MessageEvent) => {
        //     if(ev.data == 'ready'){
        //         worker.postMessage(5);
        //     }
        //     else {
        //         this.setState({
        //             isMining: false, nonce: 0, hashValue: ev.data, blockStatus: Block.STATUS_VALID
        //         });
        //     }
        // });

        // workers(5, (result: any) => {
        //     this.setState({
        //         isMining: false, nonce: 0, hashValue: result, blockStatus: Block.STATUS_VALID
        //     });
        // });

        // const _self = this;
        //
        // pool.exec(fibonacci, [10])
        //     .then(function (result) {
        //         _self.setState({
        //             isMining: false, nonce: 0, hashValue: result, blockStatus: Block.STATUS_VALID
        //         });
        //     })
        //     .catch(function (err) {
        //         console.error(err);
        //     })
        //     .then(function () {
        //         pool.terminate(); // terminate all workers when done
        //     });
        const _self = this;

        const p = new Parallel([10]);
        p.spawn(async (data: number[]) => {
            // return [111];

            const n = data[0];
            const result = await fibonacci(n);
            return [result];
        }).then((data: number[]) => {
            const result = data[0].toString();
            _self.setState({
                isMining: false, nonce: 0, hashValue: result, blockStatus: Block.STATUS_VALID
            });
        });
    };
}