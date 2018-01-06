require('../../static/styles/vendor/bootstrap.custom.css');
require('./App.css');

import * as React from 'react';
import { Route, Switch } from 'react-router';

import { BlockRoute, BlockRouteProps } from './routes/block/BlockRoute';
import { BlockchainRoute } from './routes/blockchain/BlockchainRoute';
import { BlockModelFactory } from './models/BlockModelFactory';
import { HashRoute, HashRouteProps } from './routes/hash/HashRoute';
import { HashModelFactory } from './models/HashModelFactory';

export class App extends React.Component {

    public render() {
        return (
            <Switch>
                <Route exact path='/'           render={(props) => this.renderHashRoute(props) }/>
                <Route exact path='/block'      render={(props) => this.renderBlockRoute(props) }/>
                <Route exact path='/blockchain' render={(props) => this.renderBlockchainRoute(props) }/>
                <Route render={() => <div>404 Not found</div>}/>
            </Switch>
        );
    }

    private renderHashRoute = (props: HashRouteProps) => {
        props.model = HashModelFactory.create();
        return (<HashRoute {...props}/>);
    };

    private renderBlockRoute = (props: BlockRouteProps) => {
        props.model = BlockModelFactory.create();
        return (<BlockRoute {...props}/>);
    };

    private renderBlockchainRoute = (props) => {

        return (<BlockchainRoute {...props}/>);
    };
}