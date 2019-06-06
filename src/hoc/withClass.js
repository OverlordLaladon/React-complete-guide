import React from "react";

//Function that returns a functional component.
//1st Function doesn't have props so its a normal funtion
const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
      {/*props being passed to the wrapped component with the spread operatot (...)*/}
    </div>
  );
};

export default withClass;
