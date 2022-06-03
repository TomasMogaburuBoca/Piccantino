import { Navbar, Container, Nav  } from 'react-bootstrap'
import CartWidgets from '../CartWidgets/CartWidgets';

function NavBar(){
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Piccantino</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Comida</Nav.Link>
                    <Nav.Link href="#pricing">Contacto</Nav.Link>
                </Nav>
                </Container>
                <CartWidgets />
            </Navbar>
            </> 
    )
}

export default NavBar;