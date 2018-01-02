import { SyntheticEvent } from 'react';

require('./Hash.css');

import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { HashModel } from '../../models/HashModel';
import { Header } from '../../components/header/Header';

export interface HashProps extends RouteComponentProps<any> {
    model?: HashModel
}

interface HashState {
    data:      string
    hashValue: string
}

export class Hash extends React.Component<HashProps, HashState>  {
    private textarea: HTMLTextAreaElement;

    public constructor(props) {
        super(props);
        this.state = {
            data:      '',
            hashValue: this.props.model.hashData('')
        };
    }

    public componentDidMount() {
        document.title = 'Hash | Blockchain Demo';
        this.focusTextarea();
    }

    public focusTextarea = () => {
        this.textarea.focus();
    };

    public render() {
        return (
            <div>
                <Header {...this.props} />

                <div className='container hash-route'>
                    <div className='row'>
                        <div className='col-md-8 col-md-offset-2'>
                            <div className='card'>
                                <div className='card-header'>
                                    <h3>sha256 Hash</h3>
                                </div>
                                <div className='card-main'>
                                    <div className='form-group'>
                                        <label>Data</label>
                                        <textarea className='form-control data-input'
                                                  ref={(input) => { this.textarea = input; }}
                                                  onChange={this.handleDataChange}
                                                  value={this.state.data}/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Hash</label>
                                        <input type="text" className='form-control hash-value'
                                               value={this.state.hashValue} disabled/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private handleDataChange = (e: SyntheticEvent<EventTarget>) => {
        const data = e.target['value'];
        const hash = this.props.model.hashData(data);
        this.setState({hashValue: hash, data: data});
    };
}