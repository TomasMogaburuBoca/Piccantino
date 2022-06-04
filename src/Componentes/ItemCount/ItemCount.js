import {useReducer, useState} from 'react'

function ItemCount() {
    const [contador, setContador] = useState (0)
    

    function cont() {
        setContador(contador + 1)
        if (contador >= 10) {
            return alert('No hay stock') 
        } else return true
    }
    return (
        <div>
            <p>{contador}</p>
            <button onClick={cont}>Agregar</button>
        </div>
    )
}

export default ItemCount