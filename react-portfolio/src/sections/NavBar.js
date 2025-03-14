import React, { useEffect, useRef } from 'react'; 
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../icons/Logo.jsx';

const NavBar = () => {
    return (
        <Navbar fixed="top" expand="xs">
            <Navbar.Brand as={Link} to="/" className="svg-container dark-hover">
                <Logo />
                <div className="logo-text">
                    <p>T</p>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/#intro">1. Intro</Nav.Link>
                    <Nav.Link as={Link} to="/#projects">2. Projects</Nav.Link>
                    <Nav.Link as={Link} to="/#contact">3. Contact</Nav.Link>
                    <Nav.Link as={Link} to="/2d-light-tracing">4. 2D Light Tracing</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
