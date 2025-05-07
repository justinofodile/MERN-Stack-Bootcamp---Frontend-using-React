import React from "react";
import withCounter from "./HOC/withCounter";

const HoverCounter = ({ counter, handleIncrement }) => {
  return (
    <div>
      <h3 onMouseMove={handleIncrement}>Hovered {counter} times</h3>
    </div>
  );
};

export default withCounter(HoverCounter);
