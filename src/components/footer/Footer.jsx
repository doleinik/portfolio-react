import React from "react";

import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container container grid">
                <h2 className="footer__title">Oleinik</h2>

                <ul className="footer__list">
                    <li>
                        <a href="#home" className="footer__link">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="footer__link">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#qualification" className="footer__link">
                            Qualification
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="footer__link">
                            Contact
                        </a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/__doleinik/" className='footer__social-link'>
                        <i className='bx bxl-instagram'></i>
                    </a>
                    <a href="https://t.me/doleinik" className='footer__social-link'>
                        <i className='bx bxl-telegram'></i>
                    </a>
                    <a href="https://www.linkedin.com/in/dima-oleinik-7246131ab/" className='footer__social-link'>
                        <i className='bx bxl-linkedin'></i>
                    </a>
                </div>
                <span className="footer__copy">
                    &#169; Doleinik. All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer