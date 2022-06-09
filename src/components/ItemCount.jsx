import React, { useState } from 'react'
import Swal from 'sweetalert2'

export default function ItemCount({ stock }) {
    const [count, setCount] = useState(1)
    const control = () => {
        if (count >= stock) {
            Swal.fire({
                title: 'ADVERTENCIA',
                text: `Stock máximo es de ${stock} unidades`,
                icon: 'warning',
                confirmButtonText: 'Cerrar'
            })
        } else {
            setCount(count + 1)
        }
    }
    const control2 = () => {
        if (count > 0 || count > stock) {
            setCount(count - 1)
        }
    }
    const control3 = () => {
        if (count <= stock && stock > 0) {
            Swal.fire({
                title: 'Gracias por tu compra!',
                text: `Has agregado ${count} unidad(es) al carrito`,
                icon: 'success',
                confirmButtonText: 'Cerrar'
            })
        }

        if (count == 0) {

            Swal.fire({
                title: 'Compra no procesada',
                text: `Stock mínimo es de 1 unidad`,
                icon: 'error',
                confirmButtonText: 'Cerrar'
            })

        }


    }
    return (
        <>
            <p>El Stock disponible es {stock} unidad</p>
            <div className='botoncontainer'>
                <button className='boton' onClick={control2}>-</button>
                <span className='stock' >{count}</span>
                <button className='boton' onClick={control}>+</button>
            </div>
            <button type='boton' className='agregar' onClick={control3}>Agregar a carrito</button>
        </>
    )
}
