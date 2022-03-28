import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // hooks has to be called on top level
  // you cannot call the condtionally, nested function, loop
  // rules of the hooks
  const handleDecrement = () => setCount(count - 1);
  const handleIncrement = () => setCount(count + 1);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement} className="btn btn-info">
        Increment
      </button>
      <button onClick={handleDecrement} className="btn btn-info">
        Decrement
      </button>
    </div>
  );
}

export default Counter;
