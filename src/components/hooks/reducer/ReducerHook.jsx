import React, { useReducer } from "react";

function ReducerHook() {
  // reducer will update the state based on your action

  const ACTION_TYPES = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
  };
  const reducer = (currentState, action) => {
    switch (action.type) {
      case ACTION_TYPES.INCREMENT:
        return currentState + action.payload;
      case ACTION_TYPES.DECREMENT:
        return currentState - action.payload;
      default:
        return currentState;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);

  //   action creator are functions which returns a plain javascript object

  const incrementCount = (count) => {
    return { type: ACTION_TYPES.INCREMENT, payload: count };
  };

  const decrementCount = (count) => {
    return { type: ACTION_TYPES.DECREMENT, payload: count };
  };
  return (
    <div>
      <p>Count:{count}</p>
      <button
        onClick={() => {
          dispatch(incrementCount(10));
        }}
        className="btn btn-info"
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrementCount(10));
        }}
        className="btn btn-info"
      >
        Decrement
      </button>
    </div>
  );
}

export default ReducerHook;
