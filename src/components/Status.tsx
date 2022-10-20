import React from "react";

type StatusProps = {
  status: string;
};

const Status = (props: StatusProps) => {
  let message;

  if (props.status === "loading") {
    message = "loading...";
  } else if (props.status === "success") {
    message = "Data Featched Successfully";
  } else {
    message = "error";
  }

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

export default Status;
