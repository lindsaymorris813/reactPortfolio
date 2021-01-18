import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Header() {
    const location = useLocation();
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="nav nav-tabs mr-auto">
                <li className="nav-item">
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        About
        </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/projects"
                        className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}
                    >
                        Projects
        </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/contact"
                        className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                    >
                        Contact
        </Link>
                </li>
            </ul>
            <h1>Lindsay Morris</h1>
        </div>
    )
}

export default Header;