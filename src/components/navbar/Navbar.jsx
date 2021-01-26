import React from "react";
import { Link } from "react-router-dom";

import './Navbar.css'

const Navbarr = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/characterData">Character Data</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/classes">Classes</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/races">Races</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/spells">Spells</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/monsters">Monsters</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/builds">Builds</Link>
                        </li>
                        <li className="profile">
                            <Link to="/classes">Profile</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbarr;