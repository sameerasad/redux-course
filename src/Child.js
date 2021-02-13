import React, { useState } from "react";

function Child(props) {
  const [count, setcount] = useState(0);
  return (
    <div className="counter">
      <h3>I am child of {props.name}</h3>
      <h3>{count}</h3>
      <button
        className="button"
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Click here for increament
      </button>
      <br />
      <br />
      <button
        className="button"
        disabled={count.value === 0}
        onClick={() => {
          setcount(count - 1);
        }}
      >
        Click here for decreament the counter
      </button>
    </div>
  );
}

export default Child;
