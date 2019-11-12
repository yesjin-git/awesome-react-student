//action type
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

//action creator 
export function addTodo(todo,todos)  { 
    // 배열의 id값을 가져옴  
    const lstNoteId = todos.length !== 0? todos[todos.length -1].id : 0;  
  
    // const lstNoteId = todoLists; 
     
    console.log(lstNoteId+1);   
    return {   
        type: ADD_TODO,  
        todo: todo,   
        id:lstNoteId+1
    };      
}
 
export function removeTodo(todo) {
    return {
        type: REMOVE_TODO,
        id: todo
    };
}