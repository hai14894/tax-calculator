import React from "react";
import "../style.css"

const Countries = () => {
  const countries = ["Australia", "Vietnam", "UK", "America", "Japan"];

  return (
    <select className="options">
      {countries.map((country) => (
        <option key={country}>{country}</option>
      ))}
    </select>
  );
};

export default Countries;
