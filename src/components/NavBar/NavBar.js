import React from "react"
import { Link } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"
import "./NavBar.scss"
import logo from "./img/m-logo.png"

export const NavBar = () => {

    return (
        <header className="encabezado">
            
            <Link to={"/"}><img src={ logo } className="navbar__header__logo" alt="Logo"></img></Link>

            <nav>
                <Link className="mx-1" to={"/"}>Inicio</Link>
                <Link className="mx-1" to={"/category/calzado"}>Zapatillas</Link>
                <Link className="mx-1" to={"/category/remeras"}>Remeras</Link>
                <Link className="mx-1" to={"/category/pantalones"}>Pantalones</Link>
            </nav>

            <CartWidget/>

        </header>
    )
}