import React from 'react';

class LinkForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className={"card font-color--primary"}>
                <div className="card-divider">
                    <legend>Create new Magnet Link</legend>
                </div>
                <div className="card-section">
                <form onSubmit={this.handleSubmit} className={"font-color--primary"}>
                    <label className={"font-color--primary"}>
                        Name:
                        <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label className={"font-color--primary"}>
                        magnet link:
                        <input type="text" name={"link"} value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label className={"font-color--primary"}>
                        description:
                        <textarea name={"description"} value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <button type={"submit"} className="button--save_magnet width-100 padding-vertical-1" href="#">Save !</button>
                </form>
                </div>
            </div>
        );
    }
}

export default LinkForm