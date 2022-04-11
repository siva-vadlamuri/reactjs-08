import React, { useEffect, useRef } from "react";

const Ref = () => {
  //
  const inputElement = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    console.dir(inputElement.current);
  };

  //   useEffect(() => {
  //     inputElement.current.focus();
  //   }, []);
  //  1 the input element will get the focus
  // 2 react will through the error
  return (
    <section>
      <form>
        <input ref={inputElement} type="text" />
        <button className="btn btn-info" onClick={handleClick}>
          Click Me
        </button>
      </form>
    </section>
  );
};
export default Ref;
