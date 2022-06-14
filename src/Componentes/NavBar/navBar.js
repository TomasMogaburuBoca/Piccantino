import { Navbar, Container, Nav  } from 'react-bootstrap'
import CartWidgets from '../CartWidgets/CartWidgets';

function NavBar(){
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Piccantino</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/category/pizza">Pizza</Nav.Link>
                    <Nav.Link href="/category/postre">Postre</Nav.Link>
                    <Nav.Link href="/cart">Comida</Nav.Link>
                    <Nav.Link href="#pricing">Contacto</Nav.Link>
                </Nav>
                <CartWidgets />
                </Container>
            </Navbar>
            </> 
    )
}

export default NavBar;