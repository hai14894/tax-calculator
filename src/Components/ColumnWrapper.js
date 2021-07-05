import React from 'react'

const ColumnWrapper = (props) => {
    return (
        <div className = "column">
            {props.children}
        </div>
    )
}

export default ColumnWrapper
