import React, { useContext } from "react";
import ComponentThree from "./ComponentThree";
import CourseContext from "../components/context/courseContext";

const ComponentTwo = () => {
  const { data } = useContext(CourseContext);
  console.log(data);

  return (
    <div>
      <p>Component Two</p>
      <ComponentThree />
      {<p>Data: {data}</p>}
    </div>
  );
};

export default ComponentTwo;
