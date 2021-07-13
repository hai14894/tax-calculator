import React from 'react'
import "../style.css"
const TaxBracket = (props) => {
    return (
        <div className="tax-bracket-wrap">
            <span className="tax-bracket-text">Tax Bracket</span>
            <span className="tax-bracket">{props.bracket}</span>
        </div>
    )
}

export default TaxBracket
