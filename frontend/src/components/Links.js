import React from 'react';
import MagnetLink from './MagnetLink'
import CreateLink from './CreateLink'

class Links extends React.Component {

    componentWillMount() {
        this.links = [
            {
                name: "Awesome name",
                description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
                link: "magnet:?xt=urn:btih:fake_magnet_link"
            },
            {
                name: "Lorem Ipsum is therefore",
                description: "Lorem Ipsum is not simply random text. It has roots in a piece of classical",
                link: "magnet:?xt=urn:btih:fake_magnet_link"
            },
            {
                name: "consectetur adipiscing elit",
                description: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
                link: "magnet:?xt=urn:btih:fake_magnet_link"
            },
            {
                name: "inventore veritatis et quasi architecto",
                description: "smagni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur",
                link: "magnet:?xt=urn:btih:fake_magnet_link"
            },
            {
                name: "inventore veritatis et quasi architecto",
                description: "smagni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur",
                link: "magnet:?xt=urn:btih:fake_magnet_link"
            },
            {
                name: "inventore veritatis et quasi architecto",
                description: "smagni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur",
                link: "magnet:?xt=urn:btih:fake_magnet_link"
            }
        ]
    }

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
                {this.links.map((magnet, idx) => {
                    return (<div className={"columns medium-4"}>
                        <MagnetLink key={idx} keyId={idx} name={magnet.name} magnetLink={magnet.link} description={magnet.description} />
                    </div>)
                })}
            </div>
        </div>
    );
  }
}


export default Links;
