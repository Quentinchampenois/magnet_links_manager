import React from 'react';
import 'foundation-sites/dist/css/foundation.min.css';
import 'foundation-sites/dist/css/foundation-float.min.css';
import 'foundation-sites/dist/css/foundation-prototype.min.css';
import './App.css';

import Links from "./components/Links";

class App extends React.Component {
  render() {
    return (
        <div id={"app"} className={"grid-container font-color--primary"}>
            <header className="row align-center-middle">
                <div className={"columns small-2"}>
                    <img src="magnet-icon.png" alt="logo"/>
                </div>
                <ul className={"columns small-10 menu align-right align-middle"}>
                    <li><a href="">Home</a></li>
                    <li><a href="">Connexion</a></li>
                </ul>
            </header>
            <main>
                <Links />
            </main>
        </div>
    );
  }
}


export default App;
