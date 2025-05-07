import React, { useState } from "react";

const Form = () => {
  const [course, setCourse] = useState("");
  const [desc, setDesc] = useState("");
  const [country, setCountry] = useState("");
  const [aggreement, setAggreement] = useState(false);
  const [gender, setGender] = useState("");

  const handleTextChange = (event) => {
    if (event.target.name === "course") {
      setCourse(event.target.value);
      // console.log(course);
    } else if (event.target.name === "desc") {
      setDesc(event.target.value);
    } else if (event.target.name === "country") {
      setCountry(event.target.value);
    } else if (event.target.name === "aggreement") {
      setAggreement(event.target.checked);
    } else if (event.target.name === "gender") {
      setGender(event.target.value);
    }
    // console.log(course);
    // console.log(desc);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(course);
    console.log(desc);
    console.log(country);
    console.log(aggreement);
    console.log(gender);
  };
  // console.log(gender);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="course" value={course} onChange={handleTextChange} />
        <br />
        <br />
        <textarea
          name="desc"
          value={desc}
          onChange={handleTextChange}
        ></textarea>
        <br />
        <select name="country" value={country} onChange={handleTextChange}>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
        </select>
        <br />
        <input
          type="checkbox"
          name="aggreement"
          checked={aggreement}
          onChange={handleTextChange}
        />
        <br />
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleTextChange}
        />
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleTextChange}
        />
        <input
          type="radio"
          name="gender"
          value="Others"
          // title="Others"
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" value="Save Data" />
      </form>
    </div>
  );
};

export default Form;
