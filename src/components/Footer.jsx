import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

function Footer(){
    return(
        <footer className="footer">
            <p>&copy; 2024 Boletusam2 Gaming | IT Support. All rights reserved</p>
            <ul>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/terms-of-service">Terms of Service</a></li>
                <li><Link to="/Contact">Contact Us</Link></li>
            </ul>
        </footer>
    )
}

export default Footer;