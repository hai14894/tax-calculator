import React from "react";
import FormHeader from "./FormHeader";
import Rectangle from "./Rectangle";
import Question from "./Question";

import "../style.css";
const Form = (props) => {
  return (
    <div className="form">
      <FormHeader text={props.text} ></FormHeader>
      <Rectangle styleName="rectangle-placeholder"><p>Fields marked with * are mandatory</p></Rectangle>
      <Question question="Select your country of residence *" />
      <Rectangle styleName="rectangle-default">
        <select className="options">
          <option className="options" value="Australia">
            Australia
          </option>
          <option className="options" value="Australia">
            UK
          </option>
        </select>
      </Rectangle>
      <Question question="Select an income year *" />
      <Rectangle styleName="rectangle-default">
        <select className="options">
          <option value="2020-2021">2020-2021</option>
          <option value="2020-2021">2019-2020</option>
        </select>
        
      </Rectangle>
      <Question question="Enter your total taxable income for the income year *" />
      <Rectangle styleName="rectangle-default">
        <span>$</span>
        <input type="number"  placeholder="Amount"></input>
        <span>.00</span>
      </Rectangle>
      <Rectangle styleName="rectangle-submit" visibility={props.visibility}>
        <button>Calculate</button>
      </Rectangle>
    </div>
  );
};

export default Form;
