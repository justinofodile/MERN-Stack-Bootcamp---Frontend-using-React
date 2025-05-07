import React, { useEffect, useState } from "react";

const UseEffectCom = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter((oldVal) => oldVal + 1);
  };

  useEffect(() => {
    console.log("Call on every render");
  });

  useEffect(() => {
    console.log("Call on initial render");
  }, []);

  useEffect(() => {
    console.log("Call on every counter changes");
  }, [counter]);

  return (
    <div>
      <p>Useeffect Example</p>
      <button onClick={handleCounter}>Click Counter</button>
      <p>{counter}</p>
    </div>
  );
};

export default UseEffectCom;
