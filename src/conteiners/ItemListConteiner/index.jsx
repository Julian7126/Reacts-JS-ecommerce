import React, {useState, useEffect}  from 'react';
import './styles.css';
import rawProducts from '../../componentes/products'; 
import ItemList from '../../componentes/ItemList';



export default function ItemListConteiner ({greeting}) {



    
    const [products, setProducts] = useState([])


useEffect (() => {

    (async() => {


        const obtenerProducts = () => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(rawProducts);
            }, 3000);
        });
    }
        
        const response = await obtenerProducts ();
        setProducts(response)
        

    } )()

},   [])





   

    return (
        <ItemList products={products}/>



    )
}