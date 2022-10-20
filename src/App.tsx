import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";

function App() {

  const personName = {
    first: "Arshad",
    last: "v p",
  };

  // const nameList = [
  //   {
  //     first: "Ravi",
  //     last: "Kumar",
  //   },
  //   {
  //     first: "Babu",
  //     last: "M",
  //   },
  //   {
  //     first: "Lajeesh",
  //     last: "v l",
  //   },
  //   {
  //     first: "Sindhu",
  //     last: "M",
  //   },

  // ];

  return (
    <div className="App">
      <Greet name="Arshad v p" messageCount={10} isLoggedIn={true} />
      <Person name={personName} isLoggedIn={true} />
    </div>
  );
}

export default App;
