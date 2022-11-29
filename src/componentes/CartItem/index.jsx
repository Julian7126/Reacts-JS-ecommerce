import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../contexts/Shop';
import "../CartItem/styles.css"

const CartItem = ({item}) => {

  
  const {removeProduct} = useContext(Shop);

  const handleRemove = () => {
    removeProduct(item.id)
  }


  return (
    <div className='item-carrito'>
        <img className='image-carrito' src={item.image} width={200} alt="" />
        <h1>{item.title}</h1>
        <h2>{item.price}</h2>
        <p>{item.quantity}</p>
        <box-icon onClick={handleRemove} name='x-circle' ></box-icon>
    </div>
  )
}

export default CartItem