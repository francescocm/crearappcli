import React from "react"
import { Link } from "react-router-dom"
import './Counter.css'

export const Counter = ({max, cantidad, setCantidad, agregar, agregado}) => {

        console.log(agregado)
        const handleSumar = () => {
            if (cantidad < max) {
            setCantidad(cantidad + 1)
            }
        }

        const handleRestar = () => {
            if (cantidad > 1) {
            setCantidad(cantidad - 1)
            }      
        }

    return (
        <>
        <div className="d-flex section__center">

            {
                agregado
                    ? <Link to="/cart" className="btn btn-success">Finalizar compra</Link>
                    :
                    <div className="counter__section">
                    <button className="btn btn-primary mx-1" onClick={handleRestar}>-</button>
                    <p>{cantidad}</p>
                    <button className="btn btn-primary mx-1" onClick={handleSumar}>+</button>
                    <button className="btn btn-outline-primary" onClick={agregar}>Agregar al carrito</button>
                    </div>
                }     
        </div>
        </>
    )
}