import React from "react";
import Card from "./Components/Card";
import Form from "./Components/Form";

import "./style.css";

export default function App() {
  return (
    <div className = "outer-box">
      <div className = "column">
        <Card></Card>
      </div>
      <div className = "column">
        <Form></Form>
      </div>  
      
    </div>
  );
}
