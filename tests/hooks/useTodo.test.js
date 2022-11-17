import { act, renderHook } from "@testing-library/react";
import { expect } from "vitest";
import { useTodo } from "../../src/hooks/useTodo";

describe("Tests of useTodo hook", () => {
  const initialUseTodo = {
    todos: [],
    todosCount: 0,
    pendingTodosCount: 0,
  };

  const todo = {
    id: 1,
    description: "Todo 1",
    done: false,
  };

  test("should return initial state", () => {
    const { result } = renderHook(() => useTodo());

    expect(result.current).toEqual({
      todos: initialUseTodo.todos,
      handleNewTodo: expect.any(Function),
      handleDeleteTodo: expect.any(Function),
      handleToggleTodo: expect.any(Function),
      todosCount: initialUseTodo.todosCount,
      pendingTodosCount: initialUseTodo.pendingTodosCount,
    });
  });

  test("should handle new todo", () => {
    const { result } = renderHook(() => useTodo());
    act(() => result.current.handleNewTodo(todo));
    expect(result.current.todos.length).toBe(1);
  });

  test("should handle toggle todo", () => {
    const { result } = renderHook(() => useTodo());
    act(() => result.current.handleToggleTodo(todo.id));
    expect(result.current.todos[0].done).toBe(true);
  });

  test("should handle delete todo", () => {
    const { result } = renderHook(() => useTodo());
    act(() => result.current.handleDeleteTodo(todo.id));
    expect(result.current.todos.length).toBe(0);
  });
});
