import { useEffect, useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import TodoList from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos") || []);
};

export const TodoApp = () => {
  const [todos, dispatchTodoAction] = useReducer(
    todoReducer,
    initialState,
    init
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (newTodo) => {
    dispatchTodoAction({
      type: "ADD_TODO",
      payload: newTodo,
    });
  };

  const handleDeleteTodo = (id) => {
    dispatchTodoAction({
      type: "REMOVE_TODO",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatchTodoAction({
      type: "MARK_AS_DONE",
      payload: id,
    });
  };

  return (
    <>
      <h1>Todo App ({todos.length})</h1>
      <h2>Pendientes: {todos.filter((todo) => todo.done === false).length}</h2>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          ></TodoList>
        </div>

        <div className="col-5">
          <h4>Add TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
