import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class MagnetLink extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: this.props.magnetLink,
            copied: false,
        };
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
                    <CopyToClipboard text={this.state.value}
                                     onCopy={() => this.setState({copied: true})}>
                        <span>{this.props.magnetLink}</span>
                    </CopyToClipboard>
                    {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
                </div>
            </div>
        );
    }
}


export default MagnetLink;
