import React from 'react';

class LinkForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className={"card"}>
                <div className="card-divider">
                    <legend>Create new Magnet Link</legend>
                </div>
                <div className="card-section">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        magnet link:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        description:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                </div>
            </div>
        );
    }
}

export default LinkForm