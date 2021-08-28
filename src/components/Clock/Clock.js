import React, { useState } from "react"

export const Clock = () => {

    const [time, setTime] = useState( new Date() )

    const handleTimer = () => {
        setTime( new Date() )
    }



    return (
        <div onClick={handleTimer}>
            <h2>Clock</h2>
            <p>{ time.toLocaleDateString() }</p>
        </div>
    )
}