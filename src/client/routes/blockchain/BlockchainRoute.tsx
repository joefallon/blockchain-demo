import { NonceFinder } from '../../domain/NonceFinder';

require('./BlockchainRoute.css');

import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { Header } from '../../components/header/Header';
import { Block, BlockProps } from '../../components/block/Block';

export interface BlockchainRouteProps extends RouteComponentProps<any> {}

interface BlockchainRouteState {
    blocks: BlockProps[]
}

export class BlockchainRoute extends React.Component<BlockchainRouteProps, BlockchainRouteState> {

    public constructor(props: BlockchainRouteProps) {
        super(props);
        this.state = {
            blocks: []
        };
        document.title = 'Blockchain | Blockchain Demo';
    }

    public render() {
        const blocks = this.state.blocks.map((block: BlockProps) => {
            return (
                <div className='row' key={block.sequenceId}>
                    <div className='col-md-8 col-md-offset-2'>
                        <Block {...block}/>
                    </div>
                </div>
            );
        });

        return (
            <div>
                <Header {...this.props} />

                <div className='container blockchain-route'>
                    {blocks}

                    <div className='row'>
                        <div className='col-md-8 col-md-offset-2 text-right'>
                            <div className='add-block'>
                                <input type="button" className="btn btn-primary" value="Add Block"
                                       name="add-block-button"
                                       onClick={this.handleAddBlockClick}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

    public handleAddBlockClick = () => {
        this.setState((prevState: BlockchainRouteState) => {
            const sequenceId = prevState.blocks.length + 1;
            let prevHash = '0000000000000000000000000000000000000000000000000000000000000000';

            if(prevState.blocks.length > 0) {
                const lastIndex = prevState.blocks.length - 1;
                const lastBlock = prevState.blocks[lastIndex];
                prevHash = lastBlock.hash;
            }

            const nonceFinder = new NonceFinder(Block.DIFFICULTY, sequenceId, '', prevHash);
            const hash = nonceFinder.hash(0);

            const block: BlockProps = {
                sequenceId: sequenceId,
                data: '',
                hash: hash,
                nonce: 0,
                prevHash: prevHash,
                onDataInputChange: this.handleDataInputChange,
                onNonceUpdate:     this.handleNonceUpdate
            };

            prevState.blocks.push(block);
            return prevState;
        });
    };

    public handleDataInputChange = (sequenceId: number, newData: string, newHash: string) => {
        this.setState((previousState: BlockchainRouteState) => {
            let found = false;
            let currSeq = sequenceId;
            let prevHash = '';

            previousState.blocks.map((block: BlockProps) => {
                if(block.sequenceId == sequenceId && !found) {
                    block.data = newData;
                    block.hash = newHash;
                    found = true;
                    currSeq += 1;
                    prevHash = newHash;
                }

                if(found && block.sequenceId == currSeq) {
                    block.prevHash = prevHash;
                    const nonceFinder = new NonceFinder(Block.DIFFICULTY, block.sequenceId,
                        block.data, block.prevHash);
                    block.hash = nonceFinder.hash(block.nonce);
                    prevHash = block.hash;
                    currSeq += 1;
                }
            });
            return previousState;
        });
    };

    public handleNonceUpdate = (sequenceId: number, newNonce: number, newHash: string) => {
        this.setState((previousState: BlockchainRouteState) => {
            previousState.blocks.map((block: BlockProps) => {
                if(block.sequenceId == sequenceId) {
                    block.nonce = newNonce;
                    block.hash = newHash;
                }

                if(block.sequenceId == sequenceId + 1) {
                    block.prevHash = newHash;
                    const nonceFinder = new NonceFinder(Block.DIFFICULTY, block.sequenceId,
                        block.data, block.prevHash);
                    block.hash = nonceFinder.hash(block.nonce);
                }
            });
            return previousState;
        });
    };
}

