import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  // memorized function
  // the ShowIncrement component isn't rendering multiple times because
  // incrementFather ever is in the same memory value and ShowIncrement is also memorized with memo()
  const incrementFather = useCallback(() => {
    setCounter((c) => c + 1);
  }, []);

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFather} />
    </>
  );
};
