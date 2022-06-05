import React from 'react'

export default function CartWidget({ compra }) {
  return (
    <>
      <div className='carrito'>
        <i className="bi bi-cart carro"></i>
        <p className='carrito'>
          {compra}
        </p>
      </div>
    </>
  )
}
