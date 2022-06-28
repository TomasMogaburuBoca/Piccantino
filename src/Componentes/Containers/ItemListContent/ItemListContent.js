import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import { getFetch } from "../../helpers/getFetch"
import { collection, getDocs, getFirestore, queryCollection } from  'firebase/firestore'
import ItemList from "../ItemList/ItemList";

import './ItemListContent.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContent = () => {
    const [productos, setProductos] = useState([]);
    const [bool, setBool] = useState(true)

    const { id } = useParams();


    useEffect (() => {
        const dataBase = getFirestore()
        const queryCollection = collection (dataBase, 'productos')
        getDocs (queryCollection)
            .then (dataBase => setProductos(dataBase.docs.map( producto => ( {id: producto.id, ...producto.data()}))))
            .catch(err => console.log(err))
            
                            //getFetch()
                            //    .then ((resp) => {
                            //        setProductos(id?resp.filter( (producto) => producto.categoria === id ):resp)
                            //    })
                            //    .catch (err => console.log(err))
        
    }, [bool])


        return (
        <>
            <div className="divCard">
                <ItemList productos = { productos } />
                
            </div>                 
        </>
    
)}

export default ItemListContent