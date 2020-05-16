import React from 'react';
import './App.css';
import 'foundation-sites/dist/css/foundation.min.css';
import 'foundation-sites/dist/css/foundation-float.min.css';


import Links from "./components/Links";

class App extends React.Component {
  render() {
    return (
        <div id={"app"} className={"row"}>
            <header>
                <div>
                    <div>Home</div>
                    <div>Connexion</div>
                </div>
            </header>
            <main>
                <Links />
            </main>
        </div>
    );
  }
}


export default App;
