import { useEffect, useState } from "react"
import { getFetch } from "../helpers/getFetch"
import ItemCount from "../ItemCount/ItemCount"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from "./ItemList";





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
        < ItemCount stock={10} initial={1}/>
        
            <div>
                {productos.map (producto  => 
                            <div class="card" style="width: 18rem;" key={producto.id}>
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{producto.name}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            )}
            </div>                    
        </>
    
)}

export default ItemListContent