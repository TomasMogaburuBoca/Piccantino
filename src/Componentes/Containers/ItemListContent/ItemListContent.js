import { useEffect, useState } from "react"
import { getFetch } from "../../helpers/getFetch"

import ItemList from "../ItemList/ItemList";

import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContent = () => {
    const [productos, setProductos] = useState([])
    
        useEffect (() => {
            getFetch()
            .then ((resp) => {
                setProductos(resp);
            })
            .catch ((err) => console.log(err))
            .finally ((console.log('')))
        }, [])
        console.log(productos);


        return (
        <>
            <div>
                <ItemList productos = { productos } />
            </div>                    
        </>
    
)}

export default ItemListContent