import React from 'react'
import "../style.css"
const Rectangle = (props) => {
    return (
        <div className = {`rectangle ${props.styleName}`} style={props.disabled ? {backgroundColor: " #E4E4E4", color: "#848484"} : {}}>
            {props.children}
        </div>
    )
}

export default Rectangle
