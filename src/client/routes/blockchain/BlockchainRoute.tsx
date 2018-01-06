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
                BlockchainRoute.tsx
            </div>
        );
    }
}
