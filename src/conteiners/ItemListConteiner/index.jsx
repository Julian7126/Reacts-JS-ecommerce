import React from 'react';
import './styles.css';




export default function ItemListConteiner ({greeting}) {
    return (
        <div className='item-list-conteiner'>
            <h2>{greeting}</h2>
        </div>
    )
}