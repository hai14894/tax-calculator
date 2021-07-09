import React from "react";
import "../style.css"
import CardRectangle from "./CardRectangle"
import CardText from "./CardText"
const Card = (props) => {
    return (
        <div className = "card">
            <CardText text="Your estimated income tax payable is:"/>
            
            <CardRectangle>{props.income}</CardRectangle>
            <CardText text="Breakdown"/>
            <CardRectangle></CardRectangle>
            <CardRectangle></CardRectangle>
            <CardRectangle></CardRectangle>
            <CardRectangle></CardRectangle>
            <CardRectangle></CardRectangle>
        </div>
    )
}

export default Card
