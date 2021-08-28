import React, { useEffect, useState } from "react"


export const ClickTracker = () => {

    const [contador, setContador] = useState(0)
    const [fecha, setFecha] = useState ( null )

    const handleClick = () => {

        setContador( contador + 1 )
        setFecha( new Date().toLocaleDateString() )

    }

    useEffect( ()=>{
        console.log("componente montado")

        return () => {
            console.log("Componente desmontado")
        }
    }, [] )

    useEffect( ()=>{
        console.log("Actualizando contador")
    }, [contador] ) 

    return (
    <div className="container" onClick={handleClick}>

        <h2>Click Tracker</h2>
        <hr/>

        <p>Clicks: {contador}</p>
        <p>Clickeado el: {fecha}</p>
    </div>
    )
}