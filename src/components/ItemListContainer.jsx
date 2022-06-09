import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'


export default function ItemListContainer({ greeting }) {
  const [resultado, setResultado] = useState([])
  useEffect(() => {
    const items = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          { id: 1, title: "Libros de Historia", description: "Lorem ipsus door", price: 100, pictureUrl: "https://picsum.photos/150/200" },
          { id: 2, title: "Cuentos Infantiles", description: "Lorem ipsus door", price: 40, pictureUrl: "https://picsum.photos/150/200" },
          { id: 3, title: "Novelas", description: "Lorem ipsus door", price: 20, pictureUrl: "https://picsum.photos/150/200" },
          { id: 4, title: "Poesía", description: "Lorem ipsus door", price: 130, pictureUrl: "https://picsum.photos/150/200" },

        ])
        // rej(console.log("Salio mal"))
      }, 2000);
    })
    items.then((result) => { setResultado(result) })
      .catch((error) => { console.log("salio mal", error) })
  }, [])

  const stockItem = 20
  return (
    <>
      <p>
        Esto es un {greeting}
      </p>
      <ItemCount stock={stockItem} initial={1} />
      <ItemList stock={stockItem} result={resultado} />
    </>
  )
}
