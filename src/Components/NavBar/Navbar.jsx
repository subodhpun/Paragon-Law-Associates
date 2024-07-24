import React from 'react';
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import './Navbar.css'

const Navbar= ()=>{
    return(
        <div className="navbar">
            <div className="titleContainer">
                <div className="titleImg"><a href='/'><img src='Paragon.jpg'></img></a></div>
                <div className='titleName'>
                   <a href='/'> <h1>Paragon gaurab mama</h1></a>
                   <a href='/'><h3>Law Associates</h3></a>
                    </div>
            </div>
     <nav>
        <ul>
            <li>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
                <NavLink to="/PracticeAreas" activeClassName="active">Practice Areas</NavLink>
            </li>
            <li>
                <NavLink to="/About" activeClassName="active">About</NavLink>
            </li>
            <li>
                <NavLink to='/JoinUs' activeClassName="active">Join Us</NavLink>
            </li>
            <li>
                <NavLink to="/Contact" activeClassName="active">Contact</NavLink>
            </li>
        </ul>
    </nav>

        </div>
       
    );
}

export default Navbar;