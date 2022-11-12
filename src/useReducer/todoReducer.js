export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...initialState,
                action.payload
            ];
        case 'REMOVE_TODO':
            return initialState.filter(todo => todo.id !== action.payload);
        case 'MARK_AS_DONE':
            return initialState.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, done: !todo.done };
                }
                return todo;
            })
        default: return initialState;
    }
}