import React from "react";
import Event from "./Event"; // Assuming the file containing the Event component is in the same directory

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <Event event="Some Event" />
    </div>
  );
};

export default App;