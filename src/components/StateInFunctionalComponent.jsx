import React from "react";

const StateInFunctionalComponent = () => {
  const [data, setData] = React.useState("React");

  const changeCourse = (course, anotherCourse) => {
    console.log(anotherCourse);

    setData(course);
  };

  return (
    <div>
      <br />
      <button
        type="button"
        onClick={() => changeCourse("Express.js", "Javascript")}
      >
        Change Course
      </button>
      <p>{data}</p>
    </div>
  );
};

export default StateInFunctionalComponent;
