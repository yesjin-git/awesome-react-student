//action type
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

//action creator
export function addTodo(todo,todos) {

    const lastID = todos.length !== 0 ? todos[todos.length -1].id : 0;
    // console.log(lastID); 
    
    return {
        type: ADD_TODO, 
        todo: todo,
        id: lastID+1 
    };
}

export function removeTodo(todo) {
    return {
        type: REMOVE_TODO,
        id: todo
    };
}