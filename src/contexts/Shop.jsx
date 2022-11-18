import { createContext, useState } from 'react';
import React from 'react'
import Item from '../componentes/Item';

export const Shop = createContext({});


const ShopProvider = ({children}) => { 

    const [products, setProducts] = useState([]);

    const addProduct = (productToAdd) => {

    const flagRepeated = isProductRepeated(productToAdd.id);
        if (flagRepeated) {
        //    setCart(producto.map(product => {
        //     return products.id === Item.id ? {...products, quantity: product.quantity + quantity} : product
        // })) ;
     

        } else {

        setProducts([...products, productToAdd])

        }
     }

     const isProductRepeated = (id) => {
        return products.some(product => product.id === id);
     }

     const clearCart = () => setProducts([]);
     const removeProducto = () => setProducts([product => product.id === products]);
     // calculo del total
     //calculo del total de item del carrito 

  return (

    <Shop.Provider
     value = {{products, addProduct, clearCart, removeProducto}}>
        {children}
    </Shop.Provider>    
    

  )


}

export default ShopProvider