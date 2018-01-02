require('./Header.css');

import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

export interface HeaderProps extends RouteComponentProps<any> {}

interface HeaderState {
    isHashLinkActive:       boolean,
    isBlockLinkActive:      boolean,
    isBlockchainLinkActive: boolean
}

export class Header extends React.Component<HeaderProps, HeaderState> {

    public constructor(props: HeaderProps) {
        super(props);
        this.state = {
            isHashLinkActive:       (props.location.pathname == '/'),
            isBlockLinkActive:      (props.location.pathname == '/block'),
            isBlockchainLinkActive: (props.location.pathname == '/blockchain')
        };
    }

    private hashHeaderLinkClasses = () => {
        if(this.state.isHashLinkActive) {
            return 'col-md-1 header-link active';
        }
        else {
            return 'col-md-1 header-link';
        }
    };

    private blockHeaderLinkClasses = () => {
        if(this.state.isBlockLinkActive) {
            return 'col-md-1 header-link active';
        }
        else {
            return 'col-md-1 header-link';
        }
    };

    private blockchainHeaderLinkClasses = () => {
        if(this.state.isBlockchainLinkActive) {
            return 'col-md-1 header-link active';
        }
        else {
            return 'col-md-1 header-link';
        }
    };

    public render() {
        return (
            <div className='container-fluid'>
                <div className='row header'>
                    <div className='col-md-offset-1 col-md-5'>
                        <h1>Blockchain Demo</h1>
                    </div>
                    <div className={this.hashHeaderLinkClasses()}>
                        <Link to='/' className='hash-link'>Hash</Link>
                    </div>
                    <div className={this.blockHeaderLinkClasses()}>
                        <Link to='/block' className='block-link'>Block</Link>
                    </div>
                    <div className={this.blockchainHeaderLinkClasses()}>
                        <Link to='/blockchain' className='blockchain-link'>Blockchain</Link>
                    </div>
                </div>
            </div>
        );
    }
}