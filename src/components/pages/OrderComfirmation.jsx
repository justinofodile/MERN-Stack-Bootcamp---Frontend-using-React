import React from "react";
import { useNavigate } from "react-router-dom";

const OrderComfirmation = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div>
      <p>Order comfirmation successful</p>
      <button onClick={handleNavigate}>Go back</button>
    </div>
  );
};

export default OrderComfirmation;
