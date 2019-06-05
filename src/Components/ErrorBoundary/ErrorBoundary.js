import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ""
  };

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessage: error });
  };

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;

//Using this in app.js:
//Wrap the <Person> element with it, and move the key to the outer element
/*<ErrorBoundary
     key={person.id} 
  > */
//key has to be on the outer element, that we map with the map method, cos this i what we replicate
