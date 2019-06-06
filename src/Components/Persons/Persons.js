import React, { PureComponent } from "react";
import Person from "./Person/Person";

//const persons = props => {
class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] gerDerivedStateFromProps");
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log("[Persons.js] componentWillReceiveProps", props);
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons.js] shouldComponentUpdate");
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  //Shouldcomponentupdate can be replaced with simply using PureComponent
  //it checks if any of the props changed

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
    //:code that should run before the component gets removed
  }

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
