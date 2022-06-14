import { useEffect, useState } from "react"
import { getFetch } from "../../helpers/getFetch"
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";

import './ItemListContent.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContent = () => {
    const [productos, setProductos] = useState([]);
    const { id } = useParams();

        useEffect (() => {
            getFetch()
            .then ((resp) => {
                setProductos(!id?resp:resp.filter( (product) => product.type === id ));
            })
            .catch ((err) => console.log(err))
            .finally ((console.log('')))
        }, [id])
        console.log(productos);


        return (
        <>
            <div className="divCard">
                <ItemList productos = { productos } />
                {console.log(id)}
            </div>                    
        </>
    
)}

export default ItemListContent