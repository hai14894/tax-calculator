import React from 'react'
import "../style.css"
const CardRectangle = (props) => {
    return (
        <div className="card-rectangle" style={props.bigger ? {height:"70px"} : {}}>
            {props.children}
        </div>
    )
}

export default CardRectangle
