import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // useEffect it is the combination of componentDidMount, componentDidUpdate, and componentWillUnmount
  // We can use the side Effects in a functional component using useEffect

  // if you want to call the useEffect only on mounting (component creatation phase) we need to pass second parameter as an empty array (depedency array)

  const getTheUserData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  };
  // callback fn: if you pass a function as an argument to another function

  // useffect will take two arguments
  // first is a callback fn :
  // second: dependency array

  // if you pass as dependency array as empty array that will work like componentDidMount

  // if you are not passing the second argument, it will work like componentDidMount and componentDidUpdate
  useEffect(() => {
    console.log("component rendered");
    getTheUserData();
  }, []);

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
