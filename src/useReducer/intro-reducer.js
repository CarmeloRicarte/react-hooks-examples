const initialState = [{
    id: 1,
    todo: 'Learn React',
    done: false
}]

const newTodo = {
    id: 2,
    todo: 'Learn React Query',
    done: false
}

const ADD_TODO = {
    type: 'ADD_TODO',
    payload: newTodo
}

const todoReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id);
        case 'UPDATE_TODO':
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        done: action.done
                    }
                }
                return todo;
            });
        default: throw new Error('Unknown action');
    }
}

console.log(todoReducer(initialState, ADD_TODO));
