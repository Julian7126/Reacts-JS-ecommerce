import React from 'react'
import "./styles.css";

const ItemDetail = ({producto}) => {
  return (
    <div className='item-detail'>
      <img src={producto.image} width ={350} />
      <h1>{producto.tittle}</h1>
      <h2>{producto.price}</h2>
      <h2>{producto.description}</h2>
      
    </div>
  )
}

export default ItemDetail