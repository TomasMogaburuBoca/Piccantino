import { createContext, useState } from "react";

import Toastify from 'toastify-js'
import swal from 'sweetalert';

export const CartContext = createContext( [] );

const CartContextProvider = ({ children }) => {

    const [ cartList, serCartList ] = useState( [] );

    const AddToCart = (producto, count) =>{
        if (InCart(producto.id)){
            Toastify({
                text: "Este producto ya se encuentra en el carrito",
                className: "info",
                position: 'center',
                style: {
                    background: "blue",
                }
            }).showToast();
        }else {
            serCartList( [...cartList, {producto, count}] );
            setTimeout(() => {
                Toastify({
                    text: "Agregado al carrito",
                    className: "info",
                    style: {
                        background: "green",
                    }
                }).showToast();
            }, 100);
        }
    };

    const EmptyCart = () =>{
        return serCartList ([])
    }

    const DelItem = (id) =>{
        const item = cartList.filter((producto) => producto.producto.id !== id)
        return serCartList (item)
    }
    
    const InCart = (id) =>{
        return cartList && cartList.some((i) => i.producto.id === id);
    };

    const TotalProducts = () =>{
        return cartList.reduce ((acum, i) => acum + i.count, 0)
    }

    const TotalPrice = () => {
        return cartList.reduce((acum, i) => acum + (i.count * i.producto.price) ,0)
    }



    return (
        <CartContext.Provider value={{AddToCart, cartList, EmptyCart, DelItem, TotalProducts, TotalPrice, InCart}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider