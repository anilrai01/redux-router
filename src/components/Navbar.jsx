import React from 'react'
import logo from "../logo.svg";
import "../css/navbar.css";
import { Link } from "react-router-dom";

const Nabvar = () => {
    const NavLink = {
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
                <Link style={NavLink} to="/">
                <li>
                    Record Data
                </li>
                </Link>
                <Link style={NavLink} to="/edit">
                <li>
                    Edit Data
                </li>
                </Link>
            </ul>
        </nav>
     );
}
 
export default Nabvar;