import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { Shop } from '../../contexts/Shop';

const CartWidget = () => {
  const navigate= useNavigate();

  const {totalItemsCart} = useContext(Shop);

  return (
          <div onClick={()=> navigate ("/cart")} className="cart">
                <box-icon name="cart"></box-icon>
                <span className="item__total">{totalItemsCart()  === 0 ? null: `(${totalItemsCart()})`}</span>
          </div>
  )
}

export default CartWidget