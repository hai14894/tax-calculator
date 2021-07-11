import React from "react";
import "../style.css";
import CardRectangle from "./CardRectangle";
import CardText from "./CardText";
const Card = (props) => {
  const path = window.location.pathname;
  return (
    <div className="card">
      {path !== "/" && (
        <div>
          <CardText text="Your estimated income tax payable is:" />
          <CardRectangle>{props.income}</CardRectangle>
          <CardText text="Breakdown" />
          <CardRectangle></CardRectangle>
          <CardRectangle></CardRectangle>
          <CardRectangle></CardRectangle>
          <CardRectangle></CardRectangle>
          <CardRectangle></CardRectangle>
        </div>
      )}
    </div>
  );
};

export default Card;
