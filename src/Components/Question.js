import React from 'react'
import "../style.css"
const Question = (props) => {
    return (
        <div className="question">
            {props.question}
        </div>
    )
}

export default Question
