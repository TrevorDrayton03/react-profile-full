import React, { useEffect, useRef } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../icons/Logo.jsx';

const NavBar = ({ scrollToSection, brandClick }) => {
    // const aboutLinkRef = useRef(null);
    const introLinkRef = useRef(null);
    const projectsLinkRef = useRef(null);
    const contactLinkRef = useRef(null);

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

    useEffect(() => {
        const handleKeyPress = (event) => {
            let linkRef;
            // if (event.key === '1' && aboutLinkRef.current) {
            //     linkRef = aboutLinkRef.current;
            if (event.key === '1' && introLinkRef.current) {
                linkRef = introLinkRef.current;
            } else if (event.key === '2' && projectsLinkRef.current) {
                linkRef = projectsLinkRef.current;
            } else if (event.key === '3' && contactLinkRef.current) {
                linkRef = contactLinkRef.current;
            }

            if (linkRef) {
                setTimeout(() => {
                    linkRef.classList.add('nav-key-hover');
                }, 1); // delay to ensure the class is added
                linkRef.click();
                setTimeout(() => {
                    linkRef.classList.remove('nav-key-hover');
                }, 750);
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

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
                    {/* <Nav.Link
                        href="#about"
                        onClick={(event) => handleLinkClick(event, "#about", "#about")}
                        ref={aboutLinkRef}

                    >
                        1. About
                    </Nav.Link> */}
                    <Nav.Link
                        href="#intro"
                        onClick={(event) => handleLinkClick(event, "#intro", "#intro")}
                        ref={introLinkRef}

                    >
                        1. Intro
                    </Nav.Link>
                    <Nav.Link
                        href="#projects"
                        onClick={(event) => handleLinkClick(event, "#projects", "#projects")}
                        ref={projectsLinkRef}

                    >
                        2. Projects
                    </Nav.Link>
                    <Nav.Link
                        href="#contact"
                        onClick={(event) => handleLinkClick(event, "#contact", "#contact")}
                        ref={contactLinkRef}

                    >
                        3. Contact
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar