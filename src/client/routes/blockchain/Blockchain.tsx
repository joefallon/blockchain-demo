require('./Blockchain.css');

import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { Header } from '../../components/header/Header';

export interface BlockchainProps extends RouteComponentProps<any> {}

interface BlockchainState {}

export class Blockchain extends React.Component<BlockchainProps, BlockchainState> {

    public constructor(props: BlockchainProps) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <div>
                <Header {...this.props} />
                Blockchain.tsx
            </div>
        );
    }
}