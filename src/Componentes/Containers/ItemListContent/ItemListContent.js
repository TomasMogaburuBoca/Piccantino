import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import { getFetch } from "../../helpers/getFetch"

import ItemList from "../ItemList/ItemList";

import './ItemListContent.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContent = () => {
    const [productos, setProductos] = useState([]);

    const { id } = useParams();
    console.log(id)

    useEffect (() => {
        getFetch()
            .then ((resp) => {
                setProductos(id?resp.filter( (producto) => producto.categoria === id ):resp)
            })
            .catch (err => console.log(err))
        
    }, [id])


        return (
        <>
            <div className="divCard">
                <ItemList productos = { productos } />
                
            </div>                 
        </>
    
)}

export default ItemListContent