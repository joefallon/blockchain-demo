require('./BlockchainRoute.css');

import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { Header } from '../../components/header/Header';

export interface BlockchainRouteProps extends RouteComponentProps<any> {}

interface BlockchainRouteState {}

export class BlockchainRoute extends React.Component<BlockchainRouteProps, BlockchainRouteState> {

    public constructor(props: BlockchainRouteProps) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <div>
                <Header {...this.props} />

                <div className='container blockchain-route'>
                    <div className='row'>
                        <div className='col-md-8 col-md-offset-2'>
                            <div className='card'>
                                <div className='card-header'>
                                    <h3>Block 1</h3>
                                </div>
                                <div className='card-main'>
                                    <div className='form-group'>
                                        <label>Sequence ID</label>
                                        <input type='text' className='form-control sequence-id' disabled/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Nonce</label>
                                        <input type='text' className='form-control nonce' disabled/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Data</label>
                                        <textarea className='form-control data-input'/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Previous Hash</label>
                                        <input type="text" className='form-control prevhash-value' disabled/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Hash</label>
                                        <input type="text" className='form-control hash-value' disabled/>
                                    </div>
                                </div>
                                <div className='card-actions text-center'>
                                    <div className='row'>
                                        <div className='col-md-8'>
                                            <div className='status-label'>
                                                Status: <span className='status-value'>INVALID</span>
                                            </div>
                                        </div>
                                        <div className='col-md-2'>
                                            <input type="button" className="btn btn-primary" value="Mine"/>
                                        </div>
                                        <div className='col-md-2'>
                                            Right
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-8 col-md-offset-2'>
                            <div className='card'>
                                <div className='card-header'>
                                    <h3>Block 2</h3>
                                </div>
                                <div className='card-main'>
                                    <div className='form-group'>

                                    </div>
                                </div>
                                <div className='card-actions'>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-8 col-md-offset-2 text-right'>
                            <div className='add-block'>
                                <input type="button" className="btn btn-primary" value="Add Block"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
