import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = ()=>{
    return(
        <div className="nav-bar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add">Add</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;