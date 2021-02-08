import React, { useState } from "react";

function Child(props) {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h3>I am child of {props.name}</h3>
      <h3>{count}</h3>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Click here for increament
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          setcount(count - 1);
        }}
      >
        Click here for decreament
      </button>
    </div>
  );
}

export default Child;
