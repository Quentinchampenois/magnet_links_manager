import React from 'react';

class MagnetLink extends React.Component {

    render() {
        const magnetDescription = this.props.description;
        return (
            <div className="card">
                <div className="card-divider">
                    <h3>{this.props.name}</h3>
                </div>
                <div className="card-section">
                    {magnetDescription != null && magnetDescription.length > 0 &&
                        <p>{magnetDescription}</p>
                    }
                    <b>{this.props.magnetLink}</b>
                </div>
            </div>
        );
    }
}


export default MagnetLink;
