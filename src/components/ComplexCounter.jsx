import React from "react";
import { useReducer } from "react";

const initialState = {
  counter: 0,
  name: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + action.value, name: "increment" };

    case "decrement":
      return { counter: state.counter - action.value, name: "decrement" };

    default:
      return state;
  }
};
const ComplexCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch({ type: "increment", value: 2 })}>
        +
      </button>
      <p>Counter: {state.counter}</p>
      <p>{state.name}</p>
      <button onClick={() => dispatch({ type: "decrement", value: 2 })}>
        -
      </button>
    </div>
  );
};

export default ComplexCounter;
