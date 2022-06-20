import { createContext, useState } from "react";


export const CartContext = createContext( [] );

const CartContextProvider = ({children}) => {

    const [ cartList, serCartList] = useState( [] );

    const AddToCart = (producto, count) =>{
        if (InCart(producto.id)){
            alert ("El producto ya se encuentra en el carrito");
        }else {
            serCartList( [...cartList, {producto, count}] );
            alert ("Agregado al carrito");
        }
    };

    const EmptyCart = () =>{
        return serCartList ([])
    }

    const DelItem = (id) =>{
        const item = cartList.filter((producto) => producto.id !== id)
        return serCartList (item)
    }

    const TotalProducts = () =>{
        return cartList.reduce ((acum, i) => acum + i.count * i.producto.price, 0)
    }

    const InCart = (id) =>{
        return cartList && cartList.some((i) => i.producto.id === id);
    };


    return (
        <CartContext.Provider value={{AddToCart, cartList, EmptyCart, DelItem, TotalProducts}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider