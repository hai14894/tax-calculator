import React from "react";
import TaxForm from "./Components/TaxForm";
import TaxResult from "./Components/TaxResult";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./style.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={TaxForm} exact />
          <Route path="/result" component={TaxResult} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
