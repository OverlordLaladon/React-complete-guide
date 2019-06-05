import React, { Component } from "react";
import Person from "./Person/Person";

//const persons = props => {
class Persons extends Component {
  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((person, index) => {
      //  return the thing i want the person js object to map into
      return (
        <Person
          key={person.id}
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}
export default Persons;
