import React from 'react'
import { useContext } from 'react'
import CartItem from '../../componentes/CartItem';
import { Shop } from '../../contexts/Shop'
import generateOrderObject from '../../service/generateOrdenObject';


const CartContainer = () => {

    const {products, calculateTotal}= useContext(Shop);

    const confirmPurchase = () => {
        //inventado
        
        const nombre = "Julian"
        const telefono = "3513296894"
        const mail = "julibischoff@gmail.com"

        const generateOrden = generateOrderObject(nombre, telefono, mail, products, calculateTotal())
        console.log(generateOrden)
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