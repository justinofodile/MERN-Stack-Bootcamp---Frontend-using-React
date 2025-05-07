import ClassBasedComponent from "./ClassBasedComponent";
import StateInFunctionalComponent from "./StateInFunctionalComponent";

const SubComponent = ({ children }) => {
  return (
    <div>
      <p>This is our sub component</p>
      <span>{children}</span>
      {/* <ClassBasedComponent test="The props of class based component">
        This is the children of class based component
      </ClassBasedComponent> */}

      <StateInFunctionalComponent />
    </div>
  );
};

export default SubComponent;
