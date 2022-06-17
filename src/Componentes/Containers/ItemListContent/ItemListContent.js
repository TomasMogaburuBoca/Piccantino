import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import { getFetch } from "../../helpers/getFetch"

import ItemList from "../ItemList/ItemList";

import './ItemListContent.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContent = () => {
    const [productos, setProductos] = useState([]);

    const { categoriaId } = useParams();
    console.log(categoriaId)

    useEffect (() => {
        if (categoriaId) {
            getFetch()
            .then ((resp) => {
                setProductos(resp.filter( producto => producto.categoria === categoriaId ));
            })
            .catch (err => console.log(err))
        }
    }, [categoriaId])


        return (
        <>
            <div className="divCard">
                <ItemList productos = { productos } />
                {console.log(categoriaId)}
            </div>                 
        </>
    
)}

export default ItemListContent