import React from 'react'
import "../style.css"
const CardRectangle = (props) => {
    return (
        <div className="card-rectangle">
            {props.children}
        </div>
    )
}

export default CardRectangle
