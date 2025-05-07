import React, { useState } from "react";

const ConditionalRenderingComponent = () => {
  //   const [course, setCourse] = useState("Reavuect");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  let text = null;
  if (!isLoggedIn) {
    text = "Please login to continue";
  } else {
    text = "Welcome to our page";
  }
  return (
    <div>
      {/* {course === "React" ? (
        <p>This is a react course</p>
      ) : course === "Javascript" ? (
        <p>This is a Javascript course</p>
      ) : null} */}
      <p>{text}</p>
      {isLoggedIn == false ? (
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      ) : (
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default ConditionalRenderingComponent;
