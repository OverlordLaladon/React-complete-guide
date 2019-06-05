import React, { Component } from "react";
// import Radium from "radium";
import classes from "./Person.module.css";

//ES6 type component --> ES6 courses ?
//const person = props => {

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    // const style = {
    //   //Radium
    //   "@media (min-width: 500px)": {
    //     width: "450px"
    //   }
    // };

    return (
      <div className={classes.Person} /*style={style}*/>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default /*Radium(*/ Person /*)*/;
