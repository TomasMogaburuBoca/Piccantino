import { Navbar, Container, Nav  } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import CartWidgets from '../CartWidgets/CartWidgets';

function NavBar(){
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Piccantino</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link to="/">Home</Nav.Link>
                    <Nav.Link to="/categoria/pizza">Pizza</Nav.Link>
                    <Nav.Link to="/categoria/postre">Postre</Nav.Link>
                    <Nav.Link to="/cart">Comida</Nav.Link>
                    <Nav.Link to="#pricing">Contacto</Nav.Link>
                </Nav>
                <CartWidgets />
                </Container>
            </Navbar>
            </> 
    )
}

export default NavBar;