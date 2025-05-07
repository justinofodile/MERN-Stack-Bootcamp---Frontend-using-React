import React, { useState } from "react";

const CounterAppComponent = () => {
  const [counter, setCounter] = useState(0);

  const handleDecrement = () => {
    if (counter <= 1) {
      return;
    }
    setCounter((oldCounter) => {
      return oldCounter - 1;
    });
  };
  const handleIncrement = () => {
    setCounter((oldCounter) => {
      return oldCounter + 1;
    });
  };

  return (
    <div>
      <h3>Counter App Component</h3>
      <button type="button" onClick={handleDecrement}>
        -
      </button>
      <span>{counter}</span>
      <button type="button" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default CounterAppComponent;
