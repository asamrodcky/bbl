import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Element } from 'react-scroll';

function Navbar0() {
    return (
        <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">BBL</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#aboutme">
                            <Link to="aboutme" smooth={true} duration={500}>
                                About Me
                            </Link>
                        </Nav.Link>
                        <Nav.Link href="#aboutsoup">
                            <Link to="aboutsoup" smooth={true} duration={500}>
                                About Soup
                            </Link>
                        </Nav.Link>
                        <Nav.Link href="#dietaryinfo">
                            <Link to="dietaryinfo" smooth={true} duration={500}>
                                Dietary Info
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbar0;