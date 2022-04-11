import React from "react";
import GrandChild from "./GrandChild";

function Child() {
  return (
    <div>
      Child Component
      <GrandChild />
    </div>
  );
}

export default Child;
