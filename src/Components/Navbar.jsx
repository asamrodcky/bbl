import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Element } from 'react-scroll';

function Navbar0() {
    return (
        <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Feijoada by GR</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link>
                            <Link to="aboutsoup" smooth={true} duration={500}>
                                History & Culture
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="aboutme" smooth={true} duration={500}>
                                About Me
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbar0;