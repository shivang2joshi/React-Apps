import React from 'react';
import Rainbow from './../hoc/Rainbow';

class About extends React.Component{

    render(){
        return (
            <div className="container">
                <h1>About</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut dignissimos voluptate suscipit, eius magnam, explicabo repellat amet voluptates sed aliquam porro dolor fugit reiciendis totam dolores beatae deserunt, sapiente quasi.</p>
            </div>
        );
    }
}

export default Rainbow(About);