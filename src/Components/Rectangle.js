import React from 'react'
import "../style.css"
const Rectangle = (props) => {
    return (
        <div className = {`rectangle ${props.styleName} ${props.visibility}`} >
            {props.children}
        </div>
    )
}

export default Rectangle
