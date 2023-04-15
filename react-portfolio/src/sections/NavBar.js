import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../icons/Logo.jsx';

const NavBar = () => {
    const [isHide, setisHide] = useState(false);

    return (
        <Navbar fixed="top" expand="md">
            <Navbar.Brand href="#home" className="svg-container dark-hover">
                <Logo>
                </Logo>
                <div className="logo-text">
                    <p>T</p>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">About</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    {/* <Nav.Link href="#resume">Resume</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar