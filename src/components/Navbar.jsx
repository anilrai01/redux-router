import React from 'react'
import logo from "../logo.svg";
import "../css/navbar.css";
import { Link } from "react-router-dom";

const Nabvar = () => {
    return ( 
        <nav>
            <div className="logo">
                <img src={logo} className="logosvg" alt="Logo"/>
                <h1>RTH</h1>
            </div>
            <ul>
                <li>
                    <a href="#">Record Data</a>
                </li>
                <li>
                    <a href="#">Edit Data</a>
                </li>
            </ul>
        </nav>
     );
}
 
export default Nabvar;