import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContex';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => {
    const { cartList, EmptyCart, TotalProducts, TotalPrice, InconCart } = useContext(CartContext)

    return (
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
                <p>Cantidad de productos agregados {TotalProducts()}</p>
                <p>Precio total $ {TotalPrice()}</p>
                <button onClick={EmptyCart}>Vaciar carrito</button>
            </div>
        </div>
    )
}

export default Cart;