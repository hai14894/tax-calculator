import React, { useContext } from "react";
import { AppContext } from "../context";
import OuterBox from "./OuterBox";
import ColumnWrapper from "./ColumnWrapper";
import Card from "./Card";
import Form from "./Form";
import FormHeader from "./FormHeader";
import Question from "./Question";
import Rectangle from "./Rectangle";
import { Link } from "react-router-dom";
import "../style.css";
const TaxResult = () => {
  const { income } = useContext(AppContext);
  return (
    <OuterBox>
      <ColumnWrapper>
        <Form>
          <FormHeader text="Your Tax Results"></FormHeader>
          <Question question="Select your country of residence *" />
          <Rectangle styleName="rectangle-default"></Rectangle>
          <Question question="Select your income year *" />
          <Rectangle styleName="rectangle-default"></Rectangle>
          <Question question="Enter your total taxable income for the income year *" />
          <Rectangle styleName="rectangle-default"></Rectangle>
          <Link to="/">
            <div className="go-back">Go back to previous screen</div>
          </Link>
        </Form>
      </ColumnWrapper>
      <ColumnWrapper>
        <Card income={income}></Card>
      </ColumnWrapper>
    </OuterBox>
  );
};

export default TaxResult;
