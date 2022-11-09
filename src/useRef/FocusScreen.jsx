import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef(); // maintain the reference of the input
  const handleClick = () => {
    inputRef.current.select();
  };
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input ref={inputRef} type="text" placeholder="Ingrese su nombre" />

      <button
        type="button"
        className="btn btn-primary m-2"
        onClick={handleClick}
      >
        Set focus
      </button>
    </>
  );
};
