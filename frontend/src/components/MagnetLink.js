import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopy} from '@fortawesome/free-solid-svg-icons';

class MagnetLink extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: this.props.magnetLink,
            copied: false,
        };
        this.copyToClipboard = this.copyToClipboard.bind(this)
    }

    copyToClipboard() {
        this.setState({copied: true});
        setTimeout(() => {this.setState({copied: false})}, 1000)
    }

    render() {
        return (
            <div className="card">
                <div className="card-divider">
                    <h3>{this.props.name}</h3>
                </div>
                <div className="card-section">
                    {this.props.description != null && this.props.description.length > 0 &&
                    <p>{this.props.description}</p>
                    }
                    <span className="margin-right-1">{this.props.magnetLink}</span>
                    <CopyToClipboard text={this.state.value}
                                     onCopy={this.copyToClipboard}>
                        <span><FontAwesomeIcon className="cursor-pointer" icon={faCopy}/></span>
                    </CopyToClipboard>
                    {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
                </div>
            </div>
        );
    }
}


export default MagnetLink;
