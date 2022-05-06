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
                                <div className="title"></div>
                                <p className="footer-about">Vednutri was incorporated in 2018, with an aim to manufacture supreme quality products without additional sweeteners, chemicals or additives.</p>
                                <br /><br />
                                <p className="copyright">
                                    Vednutri © 2022
                                    <br /><br />
                                    <a className="footer-link" href="#">Terms of Service</a>
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
                        <div className="item social">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                </a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><img className="icon"></img></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><img className="icon"></img></a>
                        
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default footer
