// importing react so I can use JSX syntax also importing actual bttn component 
import React from "react";
import Button from "./components/Button";

function App() { //main component for whole app
  return(
    // div (wrapper) adding padding around the content
    <div style={{ padding: "2rem" }}> 
      <h1>Button Playground</h1> 
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="primary" size="sm">Small Button</Button>
      <Button variant="primary" isLoading>Loading...</Button>
    </div>
  );
}

export default App;