require('../../static/styles/vendor/bootstrap.custom.css');
require('./App.css');

import * as React from 'react';
import { Route, Switch } from 'react-router';

import { Block, BlockProps } from './routes/block/Block';
import { Blockchain } from './routes/blockchain/Blockchain';
import { BlockModelFactory } from './models/BlockModelFactory';
import { Hash, HashProps } from './routes/hash/Hash';
import { HashModelFactory } from './models/HashModelFactory';

export class App extends React.Component {

    public render() {
        return (
            <Switch>
                <Route exact path='/'           render={(props) => this.renderHashRoute(props) }/>
                <Route exact path='/block'      render={(props) => this.renderBlockRoute(props) }/>
                <Route exact path='/blockchain' render={(props) => <Blockchain {...props}/> }/>
                <Route render={() => <div>404 Not found</div>}/>
            </Switch>
        );
    }

    private renderHashRoute = (props: HashProps) => {
        props.model = HashModelFactory.create();
        return (<Hash {...props}/>);
    };

    private renderBlockRoute = (props: BlockProps) => {
        props.model = BlockModelFactory.create();
        return (<Block {...props}/>);
    };
}