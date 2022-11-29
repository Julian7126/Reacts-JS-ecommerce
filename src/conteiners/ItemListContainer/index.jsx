import React, {useState, useEffect}  from 'react';
import './styles.css';
import ItemList from '../../componentes/ItemList';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';




export default function ItemListConteiner ({greeting}) {


    const [products, setProducts] = useState([])
    
    
    const{categoryId}= useParams()


useEffect (() => {

    (async() => {
        try {
            
            // let response; 
            
        // if(categoryId) {  
       
        //     response = await fetch(`https://fakestoreapi.com/products/category/${categoryId}`)
            
            
        
        //  } else{

        //     response = await fetch(`https://fakestoreapi.com/products`)
            

        //  }




 // codigo añadido de la documentacion de firestore 
 let q;
    if(categoryId) {
        q = query(collection(db, "products"), where("category", "==", categoryId))
    } else { q = query(collection(db, "products"));
    }

const querySnapshot = await getDocs(q);
const productosFirebase= [];
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  productosFirebase.push({...doc.data(), id: doc.id})
 



});

        setProducts(productosFirebase)
        
        } catch (error) {
            console.log(error)          
        }
    } )()

},   [categoryId])

console.log(products)







   

    return (
        <>
                <ItemList products={products} />
            
        </>
        

    )
}