import React, { useContext } from "react";
import {AppContext} from "../context";
import OuterBox from "./OuterBox";
import ColumnWrapper from "./ColumnWrapper";
import Card from "./Card";
import Form from "./Form";
import "../style.css";
const TaxResult = () => {
  const { income } = useContext(AppContext);
  return (
    <OuterBox>
      <ColumnWrapper>
        <Form text="Your Tax Results" disabled = "disabled"/>
      </ColumnWrapper>
      <ColumnWrapper>
        <Card income= {income }></Card>
      </ColumnWrapper>
    </OuterBox>
  );
};

export default TaxResult;
