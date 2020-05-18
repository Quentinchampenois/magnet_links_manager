import React from 'react';
import MagnetLink from './MagnetLink'
import CreateLink from './CreateLink'

class Links extends React.Component {
  render() {
    return (
        <div className="">
            <div className="text-center padding-vertical-3">
                <h1>Store and share your magnet links !</h1>
            </div>
            <div className={"row"}>
                <div className={"columns medium-4"}>
                    <CreateLink/>
                </div>
                <div className={"columns medium-4"}>
                    <MagnetLink name="Awesome magnet" magnetLink="magnet:?xt=urn:btih:fake_magnet_link" description="Ma superbe description à propos de ce magnet link"/>
                </div>
                <div className={"columns medium-4"}>
                    <MagnetLink name="Awesome file" magnetLink="magnet:?xt=urn:btih:fake_magnet_link" description="Ma superbe description à propos de ce magnet link"/>
                </div>
            </div>
        </div>
    );
  }
}


export default Links;
