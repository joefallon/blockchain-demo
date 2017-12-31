require('../../static/styles/vendor/bootstrap.custom.css');
require('./App.css');

import * as React from 'react';

export class App extends React.Component {

    public componentDidMount() {
        document.title = 'Blockchain Demo';
    }

    public render() {
        return (<div>App.tsx</div>);
    }
}