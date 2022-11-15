import { useEffect, useReducer } from "react";
import { todoReducer } from "../useReducer/todoReducer";


const init = () =>
    localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []

export const useTodo = () => {
    const [todos, dispatchTodoAction] = useReducer(
        todoReducer,
        [],
        init
    );

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    /**
     * When the user submits a new todo, dispatch an action to add the new todo to the list of todos.
     * @param newTodo - The new todo item that we want to add to the list.
     */
    const handleNewTodo = (newTodo) => {
        dispatchTodoAction({
            type: "ADD_TODO",
            payload: newTodo,
        });
    };

    /**
     * It takes an id as an argument, and then dispatches an action to the reducer with the type of
     * "REMOVE_TODO" and the payload of the id
     * @param id - The id of the todo item that we want to delete.
     */
    const handleDeleteTodo = (id) => {
        dispatchTodoAction({
            type: "REMOVE_TODO",
            payload: id,
        });
    };

    /**
     * It takes an id as an argument, and then dispatches an action to the reducer with the type
     * "MARK_AS_DONE" and the id as the payload
     * @param id - The id of the todo item that we want to mark as done.
     */
    const handleToggleTodo = (id) => {
        dispatchTodoAction({
            type: "MARK_AS_DONE",
            payload: id,
        });
    };

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter((todo) => todo.done === false).length
    }
}

