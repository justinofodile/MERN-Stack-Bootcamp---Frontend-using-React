import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("order-confirmation");
  };
  return (
    <div>
      <p>This is Home Page</p>
      <button onClick={handleNavigate}>Place order</button>
    </div>
  );
};

export default Home;
