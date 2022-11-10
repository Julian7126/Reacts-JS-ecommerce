
import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Item/styles.css'


//Card
const Item = ({product}) => {

const navigate= useNavigate()


  const navigateDetail = () => {
    navigate(`/detail/${product.id}`)}



  return (
  
<div className ='productos' onClick={navigateDetail}>
<div className='producto'>

  <div className='producto_img'>
    <img src={product.image} alt="/" />
  </div>

<div className="producto_footer">
  <p key={product.id}>{product.title}</p>
  <p> Categoria</p>
  <p className='price'>{product.price}</p>
</div>
<div className="buttom">
  <button className='btn'>
    Añadir al carrito
  </button>
  <div>
    <a className='btn'> Vista</a>
  </div>
</div>
</div> 
</div> 





  )
}

export default Item


