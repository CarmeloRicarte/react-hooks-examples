import { fireEvent, render, screen } from "@testing-library/react";
import { expect, vi } from "vitest";
import TodoItem from "../../src/useReducer/TodoItem";

describe("Test of <TodoItem />", () => {
  const todo = {
    id: 1,
    description: "Demo todo",
    done: false,
  };

  const onDeleteTodoMock = vi.fn();
  const onToggleTodoMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("should return todo item pending to complete", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByTestId(`${todo.id}-item-description`);
    expect(spanElement.className).toBe("align-self-center ");
  });

  test("should return todo item completed", () => {
    todo.done = true;
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByTestId(`${todo.id}-item-description`);
    expect(spanElement.className).toBe(
      "align-self-center text-decoration-line-through"
    );
  });

  test("should call onToggleTodo when onClick in span", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByTestId(`${todo.id}-item-description`);
    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("should call onDeleteTodo when onClick in delete button", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
