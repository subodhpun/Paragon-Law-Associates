import React from 'react';
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import {Link } from 'react-router-dom';
import './Navbar.css'

const Navbar= ()=>{
    return(
        <div className="navbar">
            <div className="titleContainer">
                <div className="titleImg"><a href='/'><img src='\assets\Paragon.jpg'></img></a></div>
                <div className='titleName'>
                   <a href='/'> <h1>Paragon</h1></a>
                   <a href='/'><h3>Law Associates</h3></a>
                    </div>
            </div>
     <nav>
        <ul>
            <li>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
            </li>
            <li className='dropDown'>
                <NavLink to="/PracticeAreas" activeClassName="active">Practice Areas</NavLink>
                <ul className='dropDownContent'>
                    <li><Link to="/FamilyLaw"> Family Law</Link></li>
                    <li><Link to="/CyberLaw">Cyber Law</Link></li>
                    <li><Link to="/TaxLaw">Tax Law</Link></li>
                    <li><Link to="/EnergyLaw">Energy Law</Link></li>
                    <li><Link to="/LabourLaw">Labour Law</Link></li>
                </ul>
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