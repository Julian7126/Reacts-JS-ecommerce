import React, {useState, useEffect}  from 'react';
import './styles.css';
import ItemList from '../../componentes/ItemList';
import { useParams } from 'react-router-dom';



export default function ItemListConteiner ({greeting}) {


    const [products, setProducts] = useState([])
    
    const{categoryId}= useParams()


useEffect (() => {

    (async() => {
        try {
            let response; 
            
        if(categoryId) {  
       
            response = await fetch(`https://fakestoreapi.com/products/category/${categoryId}`)
            
            
        
         } else{

            response = await fetch(`https://fakestoreapi.com/products`)
            

         }

        const data = await response.json();
        setProducts(data)
        
        } catch (error) {
                    
        }
    } )()

},   [categoryId])

console.log(products)





   

    return (
        <ItemList products={products}/>

    )
}