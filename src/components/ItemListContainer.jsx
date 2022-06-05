import React from 'react'
import ItemCount from './ItemCount'

export default function ItemListContainer({ greeting }) {

  return (
    <>
      <p>
        Esto es un {greeting}
      </p>
      <ItemCount stock={20} initial={1} />
    </>
  )
}
