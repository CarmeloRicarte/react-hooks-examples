export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...initialState,
                action.payload
            ];
        case 'REMOVE_TODO':
            return initialState.filter(todo => todo.id !== action.payload);
        default: return initialState;
    }
}