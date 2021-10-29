import {Nav, Navbar, Container} from 'react-bootstrap'

import './menu.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = () => {
    return (
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Coffee house</Nav.Link>
                            <Nav.Link href="./about.html">Our cofee</Nav.Link>
                            <Nav.Link href="#link">For your pleasure</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
    );
}

export default Menu;