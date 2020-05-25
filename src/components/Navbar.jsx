import React from 'react'
import logo from "../logo.svg";
import "../css/navbar.css";
import { NavLink } from "react-router-dom";

const Nabvar = () => {
    const LinkStyle = {
        color: "#000",
        textDecoration: "none",
        height: "100%"
    }
    return ( 
        <nav>
            <div className="logo">
                <img src={logo} className="logosvg" alt="Logo"/>
                <h1>RTH</h1>
            </div>
            <ul>
                <NavLink activeClassName="activeLink" style={LinkStyle} exact to="/">
                <li>
                    Record Data
                </li>
                </NavLink>
                <NavLink activeClassName="activeLink" style={LinkStyle} to="/edit">
                <li>
                    Edit Data
                </li>
                </NavLink>
            </ul>
        </nav>
     );
}
 
export default Nabvar;