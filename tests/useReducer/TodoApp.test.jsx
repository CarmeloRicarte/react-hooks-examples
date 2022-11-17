import { render, screen } from "@testing-library/react";
import { expect, vi } from "vitest";
import { useTodo } from "../../src/hooks/useTodo";
import { TodoApp } from "../../src/useReducer/TodoApp";

vi.mock("../../src/hooks/useTodo");
describe("Test of <TodoApp />", () => {
  useTodo.mockReturnValue({
    todos: [
      {
        id: 1,
        description: "Todo 1",
        done: false,
      },
      {
        id: 2,
        description: "Todo 2",
        done: true,
      },
    ],
    handleNewTodo: vi.fn(),
    handleDeleteTodo: vi.fn(),
    handleToggleTodo: vi.fn(),
    todosCount: 2,
    pendingTodosCount: 1,
  });
  test("should match with snapshot", () => {
    const { container } = render(<TodoApp />);
    expect(container).toMatchSnapshot();
  });

  test("should show component correctly", () => {
    render(<TodoApp />);
    expect(screen.getByText("Todo 1")).toBeTruthy();
    expect(screen.getByText("Todo 2")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
