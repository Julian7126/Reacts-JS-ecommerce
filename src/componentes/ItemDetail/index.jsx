import { useState } from 'react';
import { useContext } from 'react';
import { Shop }  from "../../contexts/Shop";
import React from 'react'
import "./styles.css";
import ItemCount from '../ItemCount';
import { useNavigate } from 'react-router-dom';

const ItemDetail = ({producto}) => {

 const {addProduct} = useContext(Shop);

const [quantityItemDetail, setQuantityItemDetail] = useState(0);

const navigate = useNavigate();

const confirmPurchase = (quantity) => {
  console.log(quantity);
  addProduct({...producto, quantity})
  setQuantityItemDetail(quantity)
}

const handleNavigate = () =>{
  navigate('/cart')

}

  return (
    <div className='item-detail'>
      <img src={producto.image} width ={350} alt="" />
     
      <div className='item-text'>

      <h1>{producto.tittle}</h1>
      <h2>{producto.price}</h2>
      <h2>{producto.description}</h2>


      { quantityItemDetail ? 

      <button onClick={handleNavigate}> Buy </button>

       : 

      <ItemCount onAdd={confirmPurchase} initial={1} stock= {producto.count}/>

      }
    
    
    </div>

    </div>
  )
}

export default ItemDetail