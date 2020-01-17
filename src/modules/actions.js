// action type
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

// action creator
export function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo: todo
    };
}

export function deleteTodo(todo) {
    return {
        type: DELETE_TODO,
        todo: todo
    };
}