import { Link, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav, Badge  } from 'react-bootstrap';

import './NavBar.css';

import CartWidgets from '../CartWidgets/CartWidgets';
import CarritoGris from '../../CarritoGris.png'
import Cart from '../Cart/Cart'
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContex';


function NavBar(){
    const { IconCart, cartList, InCart } = useContext(CartContext);
    
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container className='container'>
                    <Nav className="me-auto">
                        <Navbar.Brand href="#home">Piccantino</Navbar.Brand>
                        <div className='div-menu'>
                            <Link className="link" to="/">
                                Home
                            </Link>
                            <Link className="link" to="/categoria/pizza">
                                Pizza
                            </Link>
                            <Link className="link" to="/categoria/postre">
                                Postre
                            </Link>
                        </div>
                        <div className='div-carrito'>
                            <Link to="/cart">
                                
                                    < img src={CarritoGris} className="carrito" alt="carrito" /><Badge bg="primary">{cartList.length === 0 ? '' : InCart()}</Badge>
                                
                            </Link>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </> 
    )
}

export default NavBar;