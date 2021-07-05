import {Navbar, Container, Nav, Button} from "react-bootstrap";
import {Link} from 'react-router-dom';

export const MainNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to="/" className='navbar-brand'>SIAJ Documents</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Link to="/archiveros" className='nav-link'>Archiveros</Link>
                        <Link to="/cajones" className='nav-link'>Cajones</Link>
                        <Link to="/expedientes" className='nav-link'>Expedientes</Link>

                    </Nav>
                    <Nav>
                        <Navbar.Text className="me-4">
                            Signed in as: <a href="/">Mariano Perez</a>
                        </Navbar.Text>
                        <Button variant="outline-light">Log Out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}