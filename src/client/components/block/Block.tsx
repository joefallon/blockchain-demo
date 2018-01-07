import * as React from 'react';
import { SyntheticEvent } from 'react';
import { NonceFinder } from '../../domain/NonceFinder';

import NonceFinderWorker = require('worker-loader!../../domain/NonceFinder.worker.ts');

export interface BlockProps {
    sequenceId: number,
    nonce:      number,
    data:       string,
    prevHash:   string,
    hash:       string,
    onDataInputChange: (sequenceId: number, newData: string, newHash: string) => void,
    onNonceUpdate:     (sequenceId: number, newNonce: number, newHash: string) => void
}

interface BlockState{
}

export class Block extends React.Component<BlockProps, BlockState> {
    public static readonly DIFFICULTY = 4;
    private _worker: NonceFinderWorker;


    public constructor(props: BlockProps) {
        super(props);
        this.state = {

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
                            Right
                        </div>
                    </div>
                </div>

            </div>

        );
    }

    private handleDataChange = (ev: SyntheticEvent<EventTarget>) => {
        const sequenceId = this.props.sequenceId;
        const data       = ev.target['value'];
        const prevHash   = this.props.prevHash;
        const nonce      = this.props.nonce;

        const nonceFinder = new NonceFinder(Block.DIFFICULTY, sequenceId, data, prevHash);
        const newHash     = nonceFinder.hash(nonce);
        // const status = this.getStatus();
        // this.setState({status: status });
        this.props.onDataInputChange(sequenceId, ev.target['value'], newHash);
    };

    private handleMineButtonClick = () => {
        // find new nonce
        // calculate new hash
        // inform parent of new nonce and new hash

        const worker = this._worker;

        const msg = {
            sequenceId: this.props.sequenceId,
            data:       this.props.data,
            difficulty: Block.DIFFICULTY,
            offset:     0,
            workerId:   1,
            prevHash:   this.props.prevHash
        };

        const nonceFinder = new NonceFinder(Block.DIFFICULTY, this.props.sequenceId,
                                            this.props.data, this.props.prevHash);

        worker.onmessage = (message: MessageEvent) => {
            console.log('message received from worker1...');
            console.log(message);
            const nonce = JSON.parse(message.data);
            const hash =  nonceFinder.hash(nonce);
            // const status = this.getStatus();
            // this.setState({status: status });
            this.props.onNonceUpdate(this.props.sequenceId, nonce, hash);
        };

        console.log('sending msg to worker1...');
        console.log(msg);
        worker.postMessage(JSON.stringify(msg));
    };
}