import React from "react";

type personProps = {
  name: {
    first: string;
    last: string;
  };
  isLoggedIn: boolean;
};

const Person = (props: personProps) => {
  return (
    <div>
        <h2>
          Hello you got Massges today
        </h2>
    </div>
  );
};

export default Person;
