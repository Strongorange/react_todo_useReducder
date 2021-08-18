// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./Components/App";
// import ToDosProvider from "./context";

// ReactDOM.render(
//   <React.StrictMode>
//     <ToDosProvider>
//       <App />
//     </ToDosProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import ToDosProvider from "./context";

ReactDOM.render(
  <ToDosProvider>
    <App />
  </ToDosProvider>,
  document.getElementById("root")
);
