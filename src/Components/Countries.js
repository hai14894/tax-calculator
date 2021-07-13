import React,{useContext} from "react";
import { AppContext } from "../context";
import "../style.css"
const Countries = () => {
  const countries = ["Australia", "Vietnam", "UK", "America", "Japan"];
    const {setCountry} = useContext(AppContext)
  return (
    <select className="options">
      {countries.map((country) => (
        <option key={country} onChange={(e) => setCountry(e.target.value)}>{country}</option>
      ))}
    </select>
  );
};
export default Countries;
