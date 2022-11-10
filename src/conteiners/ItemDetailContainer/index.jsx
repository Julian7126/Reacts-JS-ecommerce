import React, { useEffect , useState } from "react";
import ItemDetail from "../../componentes/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {


    const {id} = useParams()

    const [producto , setProducto ] = useState([])

    useEffect(() => {

        const getProductoDetail = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const producto = await response.json();
            setProducto(producto)
        }

        getProductoDetail()

    }, [id])

    return <ItemDetail producto={producto}/>


};

export default ItemDetailContainer;