import { useState } from "react"

export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue);

    /* It takes a value as an argument, and adds the value to the counter. */
    const increment = (value = 1) => setCounter(counter + value);

    /**
     * It takes a value as an argument, and if the counter is greater than 0, it subtracts the value
     * from the counter
     * @param [value=1] - The value to decrement the counter by.
     * @returns the value of the counter.
     */
    const decrement = (value = 1) => {
        if (counter === 0) return;
        setCounter(counter - value);
    }
    const resetCounter = () => setCounter(initialValue);

    return {
        counter,
        increment,
        decrement,
        resetCounter
    }

}
