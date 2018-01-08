import * as React from 'react';
import { SyntheticEvent } from 'react';

import { MiningLoader } from '../mining_loader/MiningLoader';
import { NonceFinder } from '../../domain/NonceFinder';
import NonceFinderWorker = require('worker-loader!../../domain/NonceFinder.worker.ts');

export interface BlockProps {
    sequenceId: number,
    nonce:      number,
    data:       string,
    prevHash:   string,
    hash:       string,
    onDataInputChange: (sequenceId: number, newData: string) => void,
    onNonceUpdate:     (sequenceId: number, newNonce: number) => void
}

interface BlockState{
    isMining: boolean
}

export class Block extends React.Component<BlockProps, BlockState> {
    public static readonly DIFFICULTY = 4;
    private _worker: NonceFinderWorker;


    public constructor(props: BlockProps) {
        super(props);
        this.state = {
            isMining: false
        };
        this._worker = new NonceFinderWorker();
    }

    private getStatus = () => {
        const nonceFinder = new NonceFinder(Block.DIFFICULTY, this.props.sequenceId, this.props.data,
            this.props.prevHash);
        const isMatch = nonceFinder.isHashMatch(this.props.nonce);

        return isMatch ? "VALID" : "INVALID";
    };

    public render() {
        return (
            <div className='card block-component'>
                <div className='card-header'>
                    <h3>Block {this.props.sequenceId}</h3>
                </div>
                <div className='card-main'>
                    <div className='form-group'>
                        <label>Sequence ID</label>
                        <input type='text' className='form-control sequence-id'
                               name="sequence-id" value={this.props.sequenceId} disabled/>
                    </div>
                    <div className='form-group'>
                        <label>Nonce</label>
                        <input type='text' className='form-control nonce'
                               name="nonce" value={this.props.nonce} disabled/>
                    </div>
                    <div className='form-group'>
                        <label>Data</label>
                        <textarea className='form-control data-input'
                                  name="data-input" value={this.props.data}
                                  onChange={this.handleDataChange}/>
                    </div>
                    <div className='form-group'>
                        <label>Previous Hash</label>
                        <input type="text" className='form-control prevhash-value'
                               name="prevhash-value" value={this.props.prevHash} disabled/>
                    </div>
                    <div className='form-group'>
                        <label>Hash</label>
                        <input type="text" className='form-control hash-value'
                               name="hash-value" value={this.props.hash} disabled/>
                    </div>
                </div>

                <div className='card-actions text-center'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className='status-label'>
                                Status: <span className='status-value'>{this.getStatus()}</span>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <input type="button" className="btn btn-primary"
                                   name="mine-button" value="Mine"
                                   onClick={this.handleMineButtonClick}/>
                        </div>
                        <div className='col-md-2'>
                            {this.renderMiningLoader()}
                        </div>
                    </div>
                </div>

            </div>

        );
    }

    private handleDataChange = (ev: SyntheticEvent<EventTarget>) => {
        const sequenceId = this.props.sequenceId;
        this.props.onDataInputChange(sequenceId, ev.target['value']);
    };

    private handleMineButtonClick = () => {
        this.setState({isMining: true});
        const worker = this._worker;

        const msg = {
            sequenceId: this.props.sequenceId,
            data:       this.props.data,
            difficulty: Block.DIFFICULTY,
            offset:     0,
            workerId:   1,
            prevHash:   this.props.prevHash
        };

        worker.onmessage = (message: MessageEvent) => {
            this.setState({isMining: false});
            console.log('message received from worker1...');
            console.log(message);
            const nonce = JSON.parse(message.data);
            this.props.onNonceUpdate(this.props.sequenceId, nonce);
        };

        console.log('sending msg to worker1...');
        console.log(msg);
        worker.postMessage(JSON.stringify(msg));
    };

    private renderMiningLoader = () => {
        if(this.state.isMining) {
            return (<MiningLoader/>);
        }
        else {
            return null;
        }
    };
}