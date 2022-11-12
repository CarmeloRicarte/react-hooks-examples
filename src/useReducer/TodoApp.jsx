import { useTodo } from "../hooks/useTodo";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

export const TodoApp = () => {
  // useTodo con todos, los handle, itialState, init
  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount,
    pendingTodosCount,
  } = useTodo();

  return (
    <>
      <h1>TODO App: {todosCount}</h1>
      <h2>Pendientes: {pendingTodosCount}</h2>
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
