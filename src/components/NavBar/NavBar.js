import React from 'react'
import {Link} from 'react-router-dom'
 
const NavBar = () => {
    console.log('This is a Navbar');
    return (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/lifestyle">Life style</Link>
        </li>
        <li>
            <Link to="/travel">Travel</Link>
        </li>
        <li>
            <Link to="/fashion">Fashion</Link>
        </li>
        <li>
            <Link to="/gallery">Gallery</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
    </ul>);
}

export default NavBar;