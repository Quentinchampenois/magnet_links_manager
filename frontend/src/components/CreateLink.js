import React from 'react';
import {Formik} from 'formik';

class LinkForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.MIN_LEN = 6;
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

    render() {
        return (
            <div className={"card font-color--primary"}>
                <div className="card-divider">
                    <h3>Create new Magnet Link</h3>
                </div>
                <div className="card-section">
                    <Formik
                        initialValues={{name: '', link: '', description: ''}}
                        validate={values => {
                            const errors = {};
                            if (!values.name) {
                                errors.name = 'Please add a name';
                            } else if (
                                values.name.length < this.MIN_LEN
                            ) {
                                errors.name = `Name is too short (${this.MIN_LEN} characters min)`;
                            }
                            if (!values.description) {
                                errors.description = 'Please add a description';
                            } else if (
                                values.description.length < this.MIN_LEN
                            ) {
                                errors.description = `Description is too short (${this.MIN_LEN} characters min)`;
                            }
                            if (!values.link) {
                                errors.link = 'Please add a magnet link';
                            } else if (
                                !/^magnet:\?xt=urn:btih:[a-zA-Z0-9]*$/g.test(values.link)
                            ) {
                                errors.link = "Seems to be a wrong magnet link format";
                            }
                            return errors;
                        }}
                        onSubmit={(values, {setSubmitting}) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({
                              values,
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              isSubmitting,
                              /* and other goodies */
                          }) => (
                            <form onSubmit={handleSubmit}>
                                <label className={"font-color--primary"}>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="margin-bottom-0"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                                {errors.name && touched.name && errors.name}
                                <label className={"margin-top-1 font-color--primary"}>Description</label>
                                <textarea
                                    name="description"
                                    value={values.description}
                                    className="margin-bottom-0"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.description && touched.description && errors.description}
                                <label className={"margin-top-1 font-color--primary"}>Link</label>
                                <input
                                    type="text"
                                    name="link"
                                    className="margin-bottom-0"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.link}
                                />
                                {errors.link && touched.link && errors.link}
                                <button type="submit" className={"margin-top-2 button--save_magnet width-100 padding-vertical-1"}
                                        disabled={isSubmitting}>
                                    Save !
                                </button>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        );
    }
}

export default LinkForm