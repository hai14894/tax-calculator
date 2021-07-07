import React from 'react'
import "../style.css"
const FormHeader = (props) => {
    return (
        <div className="form-header">
            {props.text}
        </div>
    )
}

export default FormHeader
