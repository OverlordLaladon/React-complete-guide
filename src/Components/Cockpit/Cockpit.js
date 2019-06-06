import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.module.css";
import AuthContext from "../../Context/auth-context";

const Cockpit = props => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext); //same as static contextType in calss based components

  console.log(authContext.authenticated);

  //useEffect runs after every render cycle
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Http request...
    // const timer = setTimeout(() => {
    //   alert("Saved data to cloud!");
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);
  // empty array makes it only run on the first time

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  }); //can be used multiple times

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  //classes.Red is a string created by the CSS loader
  //Red is a nested class within button class, but it still works like this

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle these fuckers!!
      </button>
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

//Preventing unnecessary (when nothing changed) re-rendering of this component with memo
export default React.memo(Cockpit);
