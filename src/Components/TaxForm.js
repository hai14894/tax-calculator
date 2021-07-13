import React, { useContext } from "react";
import { AppContext } from "../context";
import OuterBox from "./OuterBox";
import ColumnWrapper from "./ColumnWrapper";
import Card from "./Card";
import Form from "./Form";
import FormHeader from "./FormHeader";
import Question from "./Question";
import Rectangle from "./Rectangle";
import Countries from "./Countries";
import IncomeYears from "./IncomeYears";
import { Link } from "react-router-dom";
import "../style.css";
const TaxForm = (props) => {
  const { setIncome } = useContext(AppContext);
  return (
    <OuterBox>
      <ColumnWrapper>
        <Card />
      </ColumnWrapper>
      <ColumnWrapper>
        <Form className="form">
          <FormHeader text="Calculate Your Tax" />

          <Rectangle styleName="rectangle-placeholder">
            <p>Fields marked with * are mandatory</p>
          </Rectangle>

          <Question question="Select your country of residence *" />
          <Rectangle styleName="rectangle-default">
            <Countries />
          </Rectangle>
          <Question question="Select an income year *" />
          <Rectangle styleName="rectangle-default">
            <IncomeYears />
          </Rectangle>
          <Question question="Enter your total taxable income for the income year *" />
          <Rectangle styleName="rectangle-default">
            <span>$</span>
            <input
              type="number"
              placeholder="Amount"
              onChange={(e) => setIncome(e.target.value)}
            ></input>
            <span>.00</span>
          </Rectangle>

          <Rectangle styleName="rectangle-submit">
            <Link to="/result">
              <button>Calculate</button>
            </Link>
          </Rectangle>
        </Form>
      </ColumnWrapper>
    </OuterBox>
  );
};

export default TaxForm;
