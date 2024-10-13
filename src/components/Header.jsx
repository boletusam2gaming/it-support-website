import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";


function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo"/>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/knowledgebase">Knowledge Base</Link>
                    </li>
                    <li>
                        <Link to="/ticketingsystem">Ticketing System</Link>
                    </li>
                    <li>
                        <Link to="/livechat">Live Chat</Link>
                    </li>
                    <li>
                        <Link to="/auth"> Login/Register </Link>  
                    </li>
                </ul>
            </nav>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
        </header>
    )
}
export default Header;