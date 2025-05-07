import React, { useEffect, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Current Time</p>
      <p>
        <span>{timer.toLocaleString()}</span>{" "}
        {/* <span>{timer.toLocaleTimeString()}</span> */}
      </p>
    </div>
  );
};

export default Timer;
