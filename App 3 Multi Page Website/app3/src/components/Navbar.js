import React from 'react';
import {Link,NavLink} from 'react-router-dom';

//use Link tag instead of a tag for routing in React. it doesn't refresh the page
//use NavLink for same purpose as Link with extra feature as
//    it adds className= 'active' automatically for active tab.
//    now make css of active tab as you want


class Navbar extends React.Component {

    render() {
        return (
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <a className="brand-logo" href="/">Multi Page Site</a>
                    <ul className="right">
                        <li><Link to="/">Home</Link></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;