import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Logo.jsx';

const NavBar = () => {
    return (
        <Navbar fixed="top" expand="lg">
            {/* <div className="container"> */}
            <Navbar.Brand href="#home" className="svg-container">
                <Logo>
                </Logo>
                <div class="text-container">
                    <p>T</p>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">About</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <Nav.Link href="#resume">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            {/* </div> */}
        </Navbar>
    );
}

export default NavBar