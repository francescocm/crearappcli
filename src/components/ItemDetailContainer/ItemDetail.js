import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { Counter } from "../Counter/Counter"
import './ItemDetail.css'

export const ItemDetail = ({category, id, nombre, desc, img, precio, stock}) => {

    const {agregarAlCarrito, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)
    
    const handleAdd = () => {
        agregarAlCarrito({
            category, id, nombre, desc, img, precio, cantidad
        })
    }
    
    return (
        <div className="item__section">
            <h2>{nombre}</h2>
            <p>Precio: {precio}</p>

            
            <img className="img__detail__section" src={img} alt={nombre}></img>
            
            <p>{desc}</p>
            <Counter 
                max={stock} 
                cantidad={cantidad} 
                setCantidad={setCantidad} 
                agregar={handleAdd} 
                agregado={isInCart(id)}
            />
            <Link to={`/category/${category}`} className="btn btn-primary">Volver</Link>
        </div>
    )
}