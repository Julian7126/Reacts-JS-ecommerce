import React, {useState, useEffect}  from 'react';
import './styles.css';
import ItemList from '../../componentes/ItemList';
import { useParams } from 'react-router-dom';



export default function ItemListConteiner ({greeting}) {


    const [products, setProducts] = useState([])
    
    const{categoryID}= useParams()


useEffect (() => {

    (async() => {
        try {
            let response; 
            
        if(categoryID) {  
       
            response = await fetch('https://fakestoreapi.com/products/category/electronics')
        
         } else{

            response = await fetch('https://fakestoreapi.com/products/category/jewelery')

         }

        const data = await response.json();
        console.log(data);
        setProducts(data.results)
        
        } catch (error) {
                    
        }
    } )()

},   [])

console.log(products)





   

    return (
        <ItemList products={products}/>



    )
}