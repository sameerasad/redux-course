import React from "react";
import Child from "./Child";

const Parent = (props) => {
  return (
    <div>
      <h2> I am parent of{props.name} </h2>
      <Child name=" Parents" />
    </div>
  );
};
export default Parent;
