import React from "react";
import OuterBox from "./OuterBox";
import ColumnWrapper from "./ColumnWrapper";
import Card from "./Card";
import Form from "./Form";
import "../style.css";
const TaxResult = () => {
  return (
    <OuterBox>
      <ColumnWrapper>
        <Form text="Your Tax Results" visibility="hide"/>
      </ColumnWrapper>
      <ColumnWrapper>
        <Card></Card>
      </ColumnWrapper>
    </OuterBox>
  );
};

export default TaxResult;
