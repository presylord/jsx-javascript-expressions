import React from "react";
import ReactDOM from "react-dom";

const firstName = "Presy Lord";
const lastName = "Kidlat";

ReactDOM.render(
  <div>
    <h1>Hello {firstName + " " + lastName}!</h1>
  </div>,
  document.getElementById("root")
);
