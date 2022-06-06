import {useReducer, useState} from 'react'

function ItemCount({stock, initial}) {
    const [contador, setContador] = useState (0)
    

    function sumar() {
        if (contador < stock) setContador(contador + 1)
    }
    function restar(){
        if (contador > initial) setContador(contador - 1)
    }

    return (
        <div>
            <p>{contador}</p>
            <button onClick={sumar}>Agregar</button>
            <button onClick={restar}>Quitar</button>
        </div>
    )
}

export default ItemCount