import React from "react";

type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {

  const  { messageCount = 0 } = props;

  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Hello {props.name} you got {messageCount} Massges today
        </h2>
      ) : (
        <h2>Wellcome Guest</h2>
      )}
    </div>
  );
  
};

export default Greet;
