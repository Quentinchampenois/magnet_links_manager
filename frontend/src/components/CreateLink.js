import React from 'react';

class LinkForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validator = this.validator.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.validator()
    }

    validator() {
        const nameValidator = this.nameValidator(this.state.name);
        const linkValidator = this.linkValidator(this.state.link);
        const descriptionValidator = this.descriptionValidator(this.state.description);
        if (nameValidator && linkValidator && descriptionValidator) {
            console.log("Form is valid !");
            return
        }
        console.log("Form is invalid");
    }

    nameValidator(name) {
        const MIN_LEN = 5;
        if (name == null || name.length < MIN_LEN) {
            return false;
        }
        return true;
    }
    linkValidator(link) {
        const LEN = 5;
        if (link == null || link.length !== LEN) {
            return false;
        }
        return true;
    }
    descriptionValidator(description) {
        const MIN_LEN = 5;
        if (description == null || description.length < MIN_LEN) {
            return false;
        }
        return true;
    }

    render() {
        return (
            <div className={"card font-color--primary"}>
                <div className="card-divider">
                    <h3>Create new Magnet Link</h3>
                </div>
                <div className="card-section">
                <form onSubmit={this.handleSubmit} className={"font-color--primary"}>
                    <label className={"font-color--primary"}>
                        Name
                        <input type="text" name={"name"} value={this.state.name} onChange={this.handleChange} required={"True"}/>
                    </label>
                    <label className={"font-color--primary"}>
                        magnet link
                        <input type="text" name={"link"} value={this.state.link} onChange={this.handleChange} required={"True"}/>
                    </label>
                    <label className={"font-color--primary"}>
                        description
                        <textarea name={"description"} value={this.state.description} onChange={this.handleChange} required={"True"}/>
                    </label>
                    <button type={"submit"} className="button--save_magnet width-100 padding-vertical-1" href="#">Save !</button>
                </form>
                </div>
            </div>
        );
    }
}

export default LinkForm