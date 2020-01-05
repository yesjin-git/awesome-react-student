// action type
export const ADD_TODO = "ADD_TODO"
export const DEL_TODO = "DEL_TODO"

// action creator
export function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo: todo
    }
}

export function delTodo(no) {
    return {
        type: DEL_TODO,
        no: no
    }
}