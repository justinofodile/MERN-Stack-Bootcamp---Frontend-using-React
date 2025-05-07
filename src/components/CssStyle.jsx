import React, { useState } from "react";
// import "../assets/css/style.css";
import classes from "../assets/css/test.module.css";

const CssStyle = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    setColor(!color);
  };
  return (
    // Inline Css
    // <div style={{ backgroundColor: "yellow", border: "5px solid black" }}>
    //   <p style={{ fontSize: "30px", color: "red" }}>Css Style Sheet</p>
    // </div>
    // Css Style
    // <div className="container">
    //   <p>Css Style Sheet</p>
    // </div>

    // Module Css
    <div className={color ? classes.container : classes.container1}>
      <p className={color ? classes.test : classes.test1}>Css Style Sheet</p>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default CssStyle;
