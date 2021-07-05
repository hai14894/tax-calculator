import React from "react";
import OuterBox from "./OuterBox";
import ColumnWrapper from "./ColumnWrapper";
import Card from "./Card";
import Form from "./Form";
import "../style.css";
const TaxForm = () => {
  return (
    <OuterBox>
      <ColumnWrapper>
        <Card />
      </ColumnWrapper>
      <ColumnWrapper>
        <Form />
      </ColumnWrapper>
    </OuterBox>
  );
};

export default TaxForm;
