import { ADD_TODO } from "./actions";
import { REMOVE_TODO } from "./actions";

const initState = {
    todos: [
        {id:0, todo: "유튜브보기"},
        {id:1, todo: "롤하기"},
        {id:2, todo: "밥먹기"},
    ]
}; 
// {
//     type : 명령어
//     todo : 어떤 데이터를 처리해라
// } 
export default function todoApp(state = initState, action) {
   switch (action.type) {
       case ADD_TODO:  
       console.log(action);  
       return Object.assign({}, state, {    //assign 은 잘 안씀. 전개연사자로 대체 가능
           todos: [...state.todos, {todo: action.todo,id: action.id}] //id를 추가해주는 로직 필요
                                   // 푸시같은 영역 
       });
       case REMOVE_TODO: 
       return { 
        todos: state.todos.filter(v => v.id !== action.id)
       }
       default:
           return state;
   } 
}