

const CartItem = ({producto}) => {
    const {name, categoria, img, price} = producto

    return (
        <div>
            <img src={img}></img>
            <h3>{name}</h3>
            <p>{categoria}</p>
            <p>${price}</p>
        </div>
    )
}

export default CartItem