import React, { useEffect , useState } from "react";
import ItemDetail from "../../componentes/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";


const ItemDetailContainer = () => {


    const {id} = useParams()

    const [producto , setProducto ] = useState([])

    useEffect(() => {

        const getProductoDetail = async () => {
            // const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            // const producto = await response.json();
            // setProducto(producto)

            
                //documentos de firebase
                //referencia del documento 
                const docRef = doc(db, "products", id);
                //generando la peticion
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                setProducto({...docSnap.data(), id: docSnap.id})
                } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                }


        }

        getProductoDetail()

    }, [id])

    return <ItemDetail producto={producto}/>


};

export default ItemDetailContainer;