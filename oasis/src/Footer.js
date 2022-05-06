import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function footer() {

    function scrollToTop() {
        window.scroll(0, 0);
    }

    return (
        <div className="footer-container">
            <div className="footer-dark">
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="item">
                                <h3>Services</h3>
                                <ul>
                                    <li><Link to="#" onClick={scrollToTop}>Our Products</Link></li>
                                    <li><Link to="/contact" onClick={scrollToTop}>Contact Us</Link></li>
                                </ul>
                            </div>
                            <div className="item text main-item">
                                <p className="footer-about">Oasis is a provider of advanced and user friendly virtual health care solution at your hands.</p>
                                <br />
                                <p className="copyright">
                                    Oasis © 2022
                                </p>
                            </div>
                            <div className="item">
                                <h3>About</h3>
                                <ul>
                                    <li><Link to="#" onClick={scrollToTop}>Products</Link></li>
                                    <li><a href="#" onClick={scrollToTop}>Gallery</a></li>
                                    <li><a href="#" onClick={scrollToTop}>Careers</a></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </footer>
            </div>
        </div>
    )
}
export default footer