import React from "react";
import FormHeader from "./FormHeader";
import Rectangle from "./Rectangle";
import Question from "./Question";

import "../style.css";
const Form = () => {
  return (
    <div className="form">
      <FormHeader></FormHeader>
      <Rectangle styleName="rectangle-placeholder"></Rectangle>
      <Question question="Select your country of residence *" />
      <Rectangle styleName="rectangle-default">
        <select className="options">
          <option className="options" value="Australia">
            Australia
          </option>
        </select>
      </Rectangle>
      <Question question="Select an income year *" />
      <Rectangle styleName="rectangle-default">
        <select className="options">
          <option value="2020-2021">2020-2021</option>
        </select>
      </Rectangle>
      <Question question="Enter your total taxable income for the income year *" />
      <Rectangle styleName="rectangle-default">
        <span>$</span>
        <input placeholder="Amount"></input>
        <span>.00</span>
      </Rectangle>
      <Rectangle styleName="rectangle-submit">
        <button>Calculate</button>
      </Rectangle>
    </div>
  );
};

export default Form;
