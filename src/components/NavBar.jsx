import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom';
export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light" style={{ color: "red" }} >
                <div className="container-fluid  fondo">
                    <img className='imagen' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K' />
                    <div className='vacio'></div>
                    <Link to={"/"} className="navbar-brand login inicio" href="#">Inicio</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                            <li className="nav-item">
                                <Link to={"productos"} className="nav-link letras" aria-current="page" href="#">Productos</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link letras" href="#">Electrónica</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link letras" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Libros
                                </a>

                            </li>

                        </ul>

                        <CartWidget compra={4} />
                        <form className="d-flex  logear" role="search">

                            <button className="btn btn-outline-success login" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
