import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context";
import FormHeader from "./FormHeader";
import Rectangle from "./Rectangle";
import Question from "./Question";

import "../style.css";
const Form = (props) => {
  const path = window.location.pathname;
  const {setIncome } = useContext(AppContext);
  
  return (
    <div className="form">
      <FormHeader text={props.text}></FormHeader>
      {path === "/" && (
        <Rectangle styleName="rectangle-placeholder">
          <p>Fields marked with * are mandatory</p>
        </Rectangle>
      )}

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
        <input
          type="number"
          placeholder="Amount"
          onChange={e=> setIncome(e.target.value)}
        ></input>
        <span>.00</span>
      </Rectangle>
      {path === "/" && (
        <Rectangle styleName="rectangle-submit">
          <Link to="/result">
            <button>Calculate</button>
          </Link>
        </Rectangle>
      )}

      {path !== "/" && (
        <Link to="/">
          <div className="go-back">Go back to previous screen</div>
        </Link>
      )}
    </div>
  );
};

export default Form;
