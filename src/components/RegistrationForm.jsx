import React, { useState } from "react";

const RegistrationForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    aggrement: false,
    country: "",
  });

  const handleChange = (e) => {
    // if (e.target.name === "name") {
    //   setData((oldValue) => ({ ...oldValue, name: e.target.value }));
    // } else if (e.target.name === "email") {
    //   setData((oldValue) => ({ ...oldValue, email: e.target.value }));
    // }
    if (e.target.type === "checkbox") {
      setData((oldValue) => ({
        ...oldValue,
        [e.target.name]: e.target.checked,
      }));
    } else {
      setData((oldValue) => ({ ...oldValue, [e.target.name]: e.target.value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Country: </label>
          <select name="country" value={data.country} onChange={handleChange}>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
          </select>
        </div>
        <div>
          <label>Gender: </label>
          <br />
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
          />
          <label>Female</label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Aggrement: </label>
          <input
            type="checkbox"
            name="aggrement"
            checked={data.aggrement}
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="submit" value="Submit Data" />
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
