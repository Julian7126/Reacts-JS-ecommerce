import React from 'react'
import { useContext } from 'react'
import CartItem from '../../componentes/CartItem';
import { Shop } from '../../contexts/Shop'
import generateOrderObject from '../../service/generateOrdenObject';
import {Formik , Form , Field} from 'formik';
import { doc, getDoc, updateDoc, collection, addDoc ,} from "firebase/firestore";
import { db } from "../../firebase/config";




const CartContainer = () => {

    const {products, calculateTotal}= useContext(Shop);

    const confirmPurchase = () => {
        (async ()=> {

            const nombre = "Julian"
            const telefono = 3513296894
            const email = "julibischoff@gmail.com"
    
            const generatedOrder = generateOrderObject(
                                            nombre,
                                            email,
                                            telefono,
                                            products,
                                            calculateTotal())
            console.log(generatedOrder);
            
            let productOutOfStock = []
//tock de los productos en el carrito
            for (const productInCart of products) {
                const docRef = doc(db, "products", productInCart.id);
                const docSnap = await getDoc(docRef);
                console.log(docSnap);
                const productInFirebase = {...docSnap.data(), id: doc.id}
                if (productInCart.quantity > productInFirebase.quantity) productOutOfStock.push(productInCart)                
            }
    
            console.log(productOutOfStock);
    
            if (productOutOfStock.length === 0) {
 //Disminuir el stock existente
                console.log(products);
    
                for (const productInCart of products) {
                        const productRef = doc(db, "products", productInCart.id);
            
                        const docSnap = await getDoc(productRef);
                        const productInFirebase = {...docSnap.data(), id: doc.id}
            
                        await updateDoc(productRef, {
                            quantity: productInFirebase.quantity - productInCart.quantity
                        });
                    }
                
 //Generar la orden
                try {
                    const docRef = await addDoc(collection(db, "orders"), generatedOrder);
                    alert(`Perfecta Order: ${docRef.id}`)
                } catch (error) {
                    console.log(error)
                }
            }
            else {
                alert("Productos fuera del estoy")
            }
        })()
       
    
    }

    return (
        <div>
            {products.map(product => {
                return <CartItem  key={product.id} item={product}/>
            })}
            <button onClick={confirmPurchase}> Buy Now! </button>
        </div>
    )
}

export default CartContainer