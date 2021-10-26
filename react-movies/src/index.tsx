import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Simple from "./Simple";
import Expression from "./Expression";
import Conditional from "./Conditional";
import ConditionalIf from "./ConditionalsIf";
import MapExample from "./MapExample";
import ConditionalidSeveralComponents from "./ConditionalidSeveralComponents";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ConditionalidSeveralComponents />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
