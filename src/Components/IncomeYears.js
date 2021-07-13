import React from "react";
import "../style.css"
const IncomeYears = () => {
  const years = ["2018-2019", "2019-2020", "2020-2021"];
  return (
    <select className="options">
      {years.map((year) => (
        <option key={year}>{year}</option>
      ))}
    </select>
  );
};

export default IncomeYears;
