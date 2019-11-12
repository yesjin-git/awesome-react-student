import { ADD_TODO } from "./actions";
import { REMOVE_TODO } from "./actions";

const initState = {
    todos: [
        {id:1, todo: "유튜브보기"},
        {id:2, todo: "롤하기"},
        {id:3, todo: "밥먹기"},
    ]
};

export default function todoApp(state = initState, action) {
   switch (action.type) {
       case ADD_TODO:
       return Object.assign({}, state, {
           todos: [...state.todos, {todo: action.todo, id: action.id}]
       });
       case REMOVE_TODO:
       return {
        todos: state.todos.filter(v => v.id !== action.id)
       }
       default:
           return state;
   } 
}