import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../icons/Logo.jsx';

const NavBar = ({ scrollToSection, brandClick }) => {
    const [isHide, setisHide] = useState(false);
    const handleBrandClick = (event, route) => {
        event.preventDefault();
        window.scrollTo(0, 0);
        brandClick(route);
    };

    // This code sets a timeout of zero seconds to execute the scrollToSection function,
    // which will wait for the DOM to fully load before scrolling to the desired section.
    const handleLinkClick = (event, route, sectionId) => {
        event.preventDefault();
        brandClick(route);
        window.setTimeout(function () {
            scrollToSection(sectionId)
        }, 0);
    };
    return (
        <Navbar fixed="top" expand="xs">
            <Navbar.Brand
                href="#"
                className="svg-container dark-hover"
                onClick={(event) => handleBrandClick(event, "/")}
            >
                <Logo>
                </Logo>
                <div className="logo-text">
                    <p>T</p>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link
                        href="#about"
                        onClick={(event) => handleLinkClick(event, "/about", "#about")}
                    >
                        1. About
                    </Nav.Link>
                    <Nav.Link
                        href="#work"
                        onClick={(event) => handleLinkClick(event, "/work", "#work")}
                    >
                        2. Projects
                    </Nav.Link>
                    <Nav.Link
                        href="#contact"
                        onClick={(event) => handleLinkClick(event, "/contact", "#contact")}
                    >
                        3. Contact
                    </Nav.Link>
                    {/* <Nav.Link href="#resume">Resume</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar