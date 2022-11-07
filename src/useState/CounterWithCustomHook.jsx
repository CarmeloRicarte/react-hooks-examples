import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, resetCounter } = useCounter();

  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => increment()}
      >
        +1
      </button>
      <button type="button" className="btn btn-primary" onClick={resetCounter}>
        Reset
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => decrement()}
      >
        -1
      </button>
    </>
  );
};
