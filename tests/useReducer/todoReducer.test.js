import { expect } from "vitest";
import { todoReducer } from "../../src/useReducer/todoReducer";

describe("Test of todoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo Todo",
      done: false,
    },
  ];

  test("should return initial state", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("should add todo", () => {
    const action = {
      type: "ADD_TODO",
      payload: {
        id: 2,
        description: "New Todo #2",
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("should remove todo", () => {
    const action = {
      type: "REMOVE_TODO",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
  });

  test("should toggle todo", () => {
    const action = {
      type: "MARK_AS_DONE",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    console.log(newState);
    expect(newState[0].done).toBe(true);
  });
});
