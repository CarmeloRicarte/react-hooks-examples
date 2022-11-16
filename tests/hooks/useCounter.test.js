import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../SRC/hooks/useCounter";
describe("Test for useCounter", () => {
  test("should return default values", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, resetCounter } = result.current;
    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(resetCounter).toEqual(expect.any(Function));
  });

  test("should generate the counter with value 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });

  test("should increment the counter", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;
    act(() => {
      increment();
      increment(2);
    });
    expect(result.current.counter).toBe(103);
  });

  test("should decrement the counter", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;
    act(() => {
      decrement();
      decrement(2);
    });
    expect(result.current.counter).toBe(97);
  });

  test("should not decrement if counter value is 0", () => {
    const { result } = renderHook(() => useCounter(0));
    const { decrement } = result.current;
    act(() => {
      decrement();
    });
    expect(result.current.counter).toBe(0);
  });

  test("should reset the counter", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement, resetCounter } = result.current;
    act(() => {
      decrement();
      resetCounter();
    });
    expect(result.current.counter).toBe(100);
  });
});
