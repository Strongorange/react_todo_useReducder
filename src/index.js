import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import ToDosProvider from "./context";
import App2 from "./Components2/App2";
import ToDosProvider2 from "./context2";

ReactDOM.render(
  <React.StrictMode>
    <ToDosProvider2>
      <App2 />
    </ToDosProvider2>
  </React.StrictMode>,
  document.getElementById("root")
);
