import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContex';
import CartItem from './CartItem';


const Cart = () => {
    const { cartList } = useContext(CartContext)

    return (
        <>
                <div className="cartDiv">{ cartList.length < 1 ?(
                        ''
                    )
                        : (
                            cartList.map((i) => <CartItem key= {i.producto.id} producto= {i.producto} />)
                        )}    
                </div> 
        </>
    )
}

export default Cart