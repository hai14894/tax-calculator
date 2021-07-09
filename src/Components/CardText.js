import React from 'react'
import "../style.css"
const CardText = (props) => {
    return (
        <div className="card-text">
            {props.text}
        </div>
    )
}

export default CardText
