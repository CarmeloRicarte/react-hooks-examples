import { useState } from "react";

export const CounterApp = () => {
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = state;

  const incrementCounter = () => {
    setCounter({
      counter1: counter1 + 1,
      ...state,
    });
  };
  return (
    <>
      <h2>Counter: {counter1}</h2>
      <h2>Counter: {counter2}</h2>
      <h2>Counter: {counter3}</h2>

      <hr />
      <button className="btn" onClick={incrementCounter}>
        +1
      </button>
    </>
  );
};
