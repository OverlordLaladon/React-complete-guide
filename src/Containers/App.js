import React, { Component } from "react";
import classes from "./App.module.css";
import Person from "../Components/Persons/Person/Person";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
//lowercase withClass bc its no longer a component, but a function, what returns a component function
import Aux from "../hoc/auxiliary";
import AuthContext from "../Context/auth-context";

import ErrorBoundary from "../Components/ErrorBoundary/ErrorBoundary";
// import Radium, { StyleRoot } from "radium";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
    //Old way of incicializing state
    // this.state = {
    //   persons: [
    //     { id: "sad", name: "Max", age: 28 },
    //     { id: "fdf", name: "Manu", age: 29 },
    //     { id: "gdg", name: "Stephanie", age: 26 }
    //   ],
    //   otherState: "some other value",
    //   showPersons: false
    // };
  }

  state = {
    persons: [
      { id: "sad", name: "Max", age: 28 },
      { id: "fdf", name: "Manu", age: 29 },
      { id: "gdg", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  // componentWillMount() {
  //   console.log("[App.js] componentWillMount");
  // }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

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

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1 //best practise
      };
    });
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

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log("[App.js] render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      // //Radium Styleroot
      // <StyleRoot>
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
      // </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default /*Radium(*/ withClass(App, classes.App) /*)*/;
