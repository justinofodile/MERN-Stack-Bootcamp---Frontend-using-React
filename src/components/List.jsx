import React from "react";

const List = () => {
  const items = ["React", "Javascript", "Vue", "MongoDB", "Exprees.js"];
  return (
    <div>
      <p>Popular Course Name</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
