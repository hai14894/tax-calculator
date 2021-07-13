import React from "react";
import "../style.css";
import CardRectangle from "./CardRectangle";
import TaxBreakdown from "./TaxBreakdown";
import CardText from "./CardText";
import TaxBracket from "./TaxBracket";
const Card = ({ income }) => {
  const path = window.location.pathname;
  const findIncomeTaxPayable = (income) => {
    if (income > 18200 && income <= 45000) {
      return (income - 18200) * 0.19;
    } else if (income > 45000 && income <= 120000) {
      return (income - 45000) * 0.325 + 5092;
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
  const fourthTaxBracket =
    income > 120000 ? incomeTaxPayable - fifthTaxBracket - 29467 : 0;
  const thirdTaxBracket =
    income > 45000
      ? incomeTaxPayable - fourthTaxBracket - fifthTaxBracket - 5092
      : 0;
  const secondTaxBracket =
    incomeTaxPayable - thirdTaxBracket - fourthTaxBracket - fifthTaxBracket;
  return (
    <div className="card">
      <div id="circle"></div>
      <div id="small-circle"></div>
      {path !== "/" && (
        <div>
          <CardText text="Your estimated income tax payable is:" />
          <CardRectangle bigger>
            <div className="income-tax">
              ${incomeTaxPayable.toLocaleString()}
            </div>
          </CardRectangle>
          <CardText text="Breakdown" />
          <CardRectangle>
          <TaxBracket bracket="$0-$18,200"/>
            <TaxBreakdown>$0</TaxBreakdown>
          </CardRectangle>
          <CardRectangle>
            <TaxBracket bracket="$18,201-$45,000"/>
            <TaxBreakdown>${secondTaxBracket.toLocaleString()}</TaxBreakdown>
          </CardRectangle>
          <CardRectangle>
          <TaxBracket bracket="$45,001-$120,000"/>
            <TaxBreakdown>${thirdTaxBracket.toLocaleString()}</TaxBreakdown>
          </CardRectangle>
          <CardRectangle>
          <TaxBracket bracket="$120,001-$180,000"/>
            <TaxBreakdown>${fourthTaxBracket.toLocaleString()}</TaxBreakdown>
          </CardRectangle>
          <CardRectangle>
          <TaxBracket bracket="$180,000+"/>
            <TaxBreakdown>${fifthTaxBracket.toLocaleString()}</TaxBreakdown>
          </CardRectangle>
        </div>
      )}
    </div>
  );
};

export default Card;
