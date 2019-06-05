import React, { Component } from "react";
import classes from "./App.module.css";
import Person from "../Components/Persons/Person/Person";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";

import ErrorBoundary from "../Components/ErrorBoundary/ErrorBoundary";
// import Radium, { StyleRoot } from "radium";

class App extends Component {
  state = {
    persons: [
      { id: "sad", name: "Max", age: 28 },
      { id: "fdf", name: "Manu", age: 29 },
      { id: "gdg", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    //... is the same as:
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    //const persons = this.state.persons.slice();
    //slice() copies the full array and returns it to the new one set above
    const persons = [...this.state.persons];
    // ... or spread also copies the elements of the array into a new one
    //this is immutable, so the original state does not change
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      // //Radium Styleroot
      // <StyleRoot>
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
      // </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default /*Radium(*/ App /*)*/;
