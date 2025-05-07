import React from "react";
import CourseContext from "./context/courseContext";

const ComponentThree = () => {
  return (
    <div>
      <p>Component Three</p>
      <CourseContext.Consumer>
        {({ course }) => <p>Course: {course}</p>}
      </CourseContext.Consumer>
    </div>
  );
};

export default ComponentThree;
