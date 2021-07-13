import React from 'react'
import "../style.css"
const TaxBreakdown = (props) => {
    return (
        <div className="tax-breakdown">
            {props.children}
        </div>
    )
}

export default TaxBreakdown
