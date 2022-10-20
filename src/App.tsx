import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PresonList from "./components/PresonList";
import Status from "./components/Status";

function App() {

  const personName = {
    first: "Arshad",
    last: "v p",
  };

  const nameList = [
    {
      first: "Ravi",
      last: "Kumar",
    },
    {
      first: "Babu",
      last: "M",
    },
    {
      first: "Lajeesh",
      last: "v l",
    },
    {
      first: "Sindhu",
      last: "M",
    }

  ];

  return (
    <div className="App">
      <Greet name="Arshad v p" messageCount={10} isLoggedIn={true} />
      <Person name={personName} isLoggedIn={true} />
      <PresonList names={nameList}/>
      <Status status="success"/>
    </div>
  );
}

export default App;
