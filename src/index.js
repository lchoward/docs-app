import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./fonts/Montserrat/Montserrat-Regular.ttf";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { init } from "@commandbar/foobar";
// import { init } from "commandbar";

init('a4d5eb69', {environment: 'staging'}); // DemoOrganization

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
