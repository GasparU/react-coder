import { useState } from "react";


export default function ItemList({ result }) {

    return (
        <div >
            {result.map(item => (
                <div className="item">
                    <img src={item.pictureUrl} width="150px"></img>
                    <p >Género: {item.title}</p>
                    <button>Descripción: {item.description}</button>
                    <p >Precio: S/{item.price}</p>
                </div>
            ))}


        </div>

    )
}
