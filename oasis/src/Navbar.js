import React, { Component, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

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
                        {/* <img src={Logo} alt="Logo" className="nav-logo"></img> */}
                        
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item"><Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-links" onClick={closeMobileMenu}>About Us</Link></li>
                        {/* <li className="nav-item"><Link to="/products" className="nav-links" onClick={closeMobileMenu}>Our Products</Link></li> */}
                        <li className="nav-item"><Link to="/contact" className="nav-links" onClick={closeMobileMenu}>Contact Us</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
