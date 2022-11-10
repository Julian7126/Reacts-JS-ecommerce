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
       
            // response = await fetch(`https://fakestoreapi.com/products/categories/${categoryId}`)
                response = await fetch(`https://fakestoreapi.com/products/category/electronics`)
            
        
         } else{

            // response = await fetch(`https://fakestoreapi.com/products/categories`)
            response = await fetch(`https://fakestoreapi.com/products/category/jewelery`)
            

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