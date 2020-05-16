class App extends React.Component {
    render() {
        if (this.loggedIn) {
            return (<LoggedIn />);
        } else {
            return (<Home />);
        }
    }
}

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="col-xs-8 col-xs-offset-2 jumbotron text-center">
                    <h1>Magnet links registery</h1>
                    <p>Simple repository of magnet links</p>
                    <p>Sign in to get access </p>
                    <a onClick={this.authenticate} className="btn btn-primary btn-lg btn-login btn-block">Sign In</a>
                </div>
            </div>
        )
    }
}

class LoggedIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            magnetLinks: []
        }
    }

    render() {
        return (
            <div className="container">
                <div className="col-lg-12">
                    <br />
                    <span className="pull-right"><a onClick={this.logout}>Log out</a></span>
                    <h2>MagnetLinks</h2>
                    <p>All links</p>
                    <div className="row">
                        {this.state.magnetLinks.map(function(link, i){
                            return (<Link key={i} link={link} />);
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

class Link extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            downloaded: ""
        }
        this.download = this.download.bind(this);
    }

    download() {
        // ... we'll add this block later
    }

    render() {
        return (
            <div className="col-xs-4">
                <div className="panel panel-default">
                    <div className="panel-heading">#{this.props.magnetLinks.id} <span className="pull-right">{this.state.downloaded}</span></div>
                    <div className="panel-body">
                        {this.props.magnetLinks.magnetLinks}
                    </div>
                    <div className="panel-footer">
                        {this.props.magnetLinks.downloaded} Likes &nbsp;
                        <a onClick={this.download} className="btn btn-default">
                            <span className="glyphicon glyphicon-thumbs-up"></span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
