import React, { Component } from "react";
import PropTypes from "prop-types";
// import Radium from "radium";
import classes from "./Person.module.css";
import Aux from "../../../hoc/auxiliary";
import withClass from "../../../hoc/withClass";
import AuthContext from "../../../Context/auth-context";

//ES6 type component --> ES6 courses ?
//const person = props => {

class Person extends Component {
  constructor(props) {
    super(props);
    //selecting the last input element using createRef and below...
    this.inputElementRef = React.createRef();
  }

  //This allows React to automatically connect this component here,
  //to your context behind the scenes and it gives you a new property (this.context) in this component
  static contextType = AuthContext;

  componentDidMount() {
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log("[Person.js] rendering...");
    // const style = {
    //   //Radium
    //   "@media (min-width: 500px)": {
    //     width: "450px"
    //   }
    // };
    return (
      //Frangmant is used as a wrapping component, doesnt do anything
      <React.Fragment>
        {/* <div  /*style={style}>*/}
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please log in!</p>
        )}
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          // ref={inputEl => {
          //   this.inputElement = inputEl;
          // }}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
        {/* </div> */}
      </React.Fragment>
    );
  }
}

//to watch out for incorrect props use propType module
Person.propTypes = {
  click: PropTypes.func, //expecting a pointer to a function
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default /*Radium(*/ withClass(Person, classes.Person) /*)*/;
