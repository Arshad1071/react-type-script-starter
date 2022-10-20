import React from "react";

type PresonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

const PresonList = (props: PresonListProps) => {
  return (
    <div>
      {props.names.map((item) => {
        return (
          <h2 key={item.first}>
            {item.first} {item.last}
          </h2>
        );
      })}
    </div>
  );
};

export default PresonList;
