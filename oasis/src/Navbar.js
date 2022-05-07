import React, { Component, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from './assets/logo.svg'

function Navbar() {
    const [click, setClick] = useState(false);
    const [openMenu, setMenu] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [error, setError] = useState();
    const history = useNavigate()


    function toggleMenu() {
        setMenu(!openMenu)
        openMenu ? document.getElementById("dropdown-content").style.display = "block"
            :
            document.getElementById("dropdown-content").style.display = "none";
    }

    // document.onclick = function(e){
    //     //    document.getElementById("dropdown-content").style.display = 'none';
    //  };
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src={logo} alt="Logo" className="nav-logo"></img> 
                        <p className="logo-text">asis</p>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item"><Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link></li>
                        <li className="nav-item"><Link to="/faq" className="nav-links" onClick={closeMobileMenu}>FAQ</Link></li>
                        <li className="nav-item"><Link to="/covid19" className="nav-links" onClick={closeMobileMenu}>COVID-19</Link></li>
                        <li className="nav-item"><Link to="/login" className="nav-links" onClick={closeMobileMenu}>{window.location.pathname == "/dashboard" || window.location.pathname == "/dashboard/health" || window.location.pathname == "/dashboard/vaccine" || window.location.pathname == "/dashboard/covid" ? "Test User 1":"Sign In"}</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
