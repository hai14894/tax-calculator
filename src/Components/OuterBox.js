import React from 'react'

const OuterBox = (props) => {
    return (
        <div className = "outer-box">
            {props.children}
        </div>
    )
}

export default OuterBox
