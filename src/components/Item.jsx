import React from 'react'

export default function Item({ item }) {
    return (
        <div className='item2'>
            <img src={item.pictureUrl} width="150px"></img>
            <p>Género: {item.title}</p>
            <button >Descripción</button>
            <p>Precio: S/{item.price}</p>
        </div>
    )
}
