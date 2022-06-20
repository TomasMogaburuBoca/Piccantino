import { Link, div } from 'react-router-dom';

import { Navbar, Container, Nav  } from 'react-bootstrap';
import './NavBar.css';

import CartWidgets from '../CartWidgets/CartWidgets';
import CarritoGris from '../../CarritoGris.png'
import Cart from '../Cart/Cart';


function NavBar(){
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container className='container'>
                    <Nav className="me-auto">
                        <Navbar.Brand href="#home">Piccantino</Navbar.Brand>
                        <div className='div-menu'>
                            <Link className='link' to="/">Home</Link>
                            <Link className='link' to="/categoria/pizza">Pizza</Link>
                            <Link className='link' to="/categoria/postre">Postre</Link>
                            <Link className='link' to="#pricing">Contacto</Link>
                        </div>
                        <div className='div-carrito'>
                            <Link to="/cart"><img src={CarritoGris} className="carrito" alt="carrito"/>
                                <Cart />
                            </Link>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
            </> 
    )
}

export default NavBar;