
import React from 'react'
import { useNavigate } from 'react-router-dom'


//Card
const Item = ({product}) => {

const navigate= useNavigate()


  const navigateDetail = () => {
    navigate(`/detail/${product.id}`)}



  return (
    <div onClick={navigateDetail}>
    <img src={product.image} alt="product"/>
    <p key={product.id}>{product.title}, price: {product.price}</p>
    </div>
  )
}

export default Item