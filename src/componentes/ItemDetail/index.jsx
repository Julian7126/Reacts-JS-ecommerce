import { useState } from 'react';
import { useContext } from 'react';
import { Shop }  from "../../contexts/Shop";
import React from 'react'
import "./styles.css";
import ItemCount from '../ItemCount';

const ItemDetail = ({producto}) => {

 const {addProduct} = useContext(Shop);

const [quantityItemDetail, setQuantityItemDetail] = useState(0);

const confirmPurchase = (quantity) => {
  console.log(quantity);
  addProduct({...producto, quantity})
  setQuantityItemDetail(quantity)
}

  return (
    <div className='item-detail'>
      <img src={producto.image} width ={350} alt="" />
     
      <div className='item-text'>

      <h1>{producto.tittle}</h1>
      <h2>{producto.price}</h2>
      <h2>{producto.description}</h2>


      { quantityItemDetail ? 

      <button> Buy </button>

       : 

      <ItemCount onAdd={confirmPurchase} initial={1} stock= {producto.count}/>

      }
    
    
    </div>

    </div>
  )
}

export default ItemDetail