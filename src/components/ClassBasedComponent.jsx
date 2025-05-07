import React from "react";

class ClassBasedComponent extends React.Component {
  //   constructor(props) {
  //     console.log(props);
  //     super(props);
  //     this.state = { course: "React" };
  //   }

  state = { course: "Javascript", counter: 0, make: 56 };
  componentDidMount() {
    // console.log("After state");
    // this.setState({ course: "vue" });
    this.setState((oldState) => {
      return {
        course: "Vue",
        counter: oldState.counter + 7,
        make: oldState.make + 34,
      };
    });

    // setInterval(() => {
    // }, 3000);
  }
  render() {
    // console.log("Before state");

    return (
      <div>
        <p>This is class based component</p>
        <p>Props: {this.props.test}</p>
        <p>Children: {this.props.children}</p>
        <p>State: This is a {this.state.course} course</p>
        <p>{this.state.counter}</p>
        <p>{this.state.make}</p>
      </div>
    );
  }
}

export default ClassBasedComponent;
