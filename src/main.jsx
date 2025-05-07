import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import TestComponents from "./Test";

// const content = "Hello there ";
// const index = 5;
// const p = (
//   <div>
//     <p className="main" tabIndex={index}>
//       <span className="text">{content}</span>
//       <br />
//       <span className="text">{content}</span>
//     </p>
//   </div>
// );

// console.log(p);
// ReactDOM.createRoot(document.getElementById("root")).render(p);

// import React from 'react'

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <TestComponents course="Javascript" name="Chukwubuikem Ofodile" />
// );
