import React from "react";
import "../style.css";
import CardRectangle from "./CardRectangle";
import CardText from "./CardText";
const Card = ({ income }) => {
  const path = window.location.pathname;
  const findIncomeTaxPayable = (income) => {
    if (income > 18200 && income <= 45000) {
      return (income - 18200) * 0.19;
    } else if (income > 45000 && income <= 120000) {
      return (income - 45000) * 0.37 + 5092;
    } else if (income > 120000 && income <= 180000) {
      return (income - 120000) * 0.37 + 29467;
    } else if (income > 180000) {
      return (income - 180000) * 0.45 + 51667;
    } else {
      return 0;
    }
  };
  const incomeTaxPayable = findIncomeTaxPayable(income);

  const fifthTaxBracket = income > 180000 ? incomeTaxPayable - 51667 : 0;
  const fourthTaxBracket = income > 120000 ? incomeTaxPayable - fifthTaxBracket - 29467 : 0;
  const thirdTaxBracket = income > 45000 ? incomeTaxPayable - fourthTaxBracket - fifthTaxBracket- 5092 : 0;
  const secondTaxBracket = incomeTaxPayable - thirdTaxBracket - fourthTaxBracket -fifthTaxBracket
  return (
    <div className="card">
      {path !== "/" && (
        <div>
          <CardText text="Your estimated income tax payable is:" />
          <CardRectangle>{incomeTaxPayable}</CardRectangle>
          <CardText text="Breakdown" />
          <CardRectangle>0</CardRectangle>
          <CardRectangle>{secondTaxBracket}</CardRectangle>
          <CardRectangle>{thirdTaxBracket}</CardRectangle>
          <CardRectangle>{fourthTaxBracket}</CardRectangle>
          <CardRectangle>{fifthTaxBracket}</CardRectangle>
        </div>
      )}
    </div>
  );
};

export default Card;
