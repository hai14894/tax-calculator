import React, { useContext } from "react";
import { AppContext } from "../context";
import "../style.css";
const IncomeYears = () => {
  const years = ["2018-2019", "2019-2020", "2020-2021"];
  const { setIncomeYear } = useContext(AppContext);
  return (
    <select className="options">
      {years.map((year) => (
        <option key={year} onChange={(e => setIncomeYear(e.target.value))}>
          {year}
        </option>
      ))}
    </select>
  );
};
export default IncomeYears;
