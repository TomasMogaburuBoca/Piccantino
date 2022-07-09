import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContex';
import CartItem from './CartItem';
import './Cart.css';
import Forms from '../Form/Forms';
import Pay from '../Pay/Pay';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Cart = () => {
    const { cartList, EmptyCart, TotalProducts, TotalPrice } = useContext(CartContext)

    return (
        <>
            <div className='container'>
                <div className="DivUno">
                    { cartList.length < 1 ?(
                        '')
                        : 
                        (
                            cartList.map((i) => <CartItem className='CartItem' key= {i.producto.id} producto= {i.producto} />)
                        )}    
                </div>
                <div className='DivDos'>
                    <p>Cantidad de productos agregados {TotalProducts}</p>
                    <p>Precio todal $ {TotalPrice}</p>
                    <Button onClick={EmptyCart} variant="danger">Vaciar carrito</Button>
                    <Link to='/pay' Element={<Pay />}><Button variant="primary">Finalizar compra</Button></Link> 
                </div>
            </div>
                <Forms />
        </>
    )
}

export default Cart;