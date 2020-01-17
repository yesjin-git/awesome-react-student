import {ADD_TODO} from "./actions"
import {DELETE_TODO} from "./actions"
import { act } from "react-dom/test-utils";

const initState = {
    todos: [
        {
            id : 0,
            text: "밥먹기"
        },
        {
            id : 1,
            text: "잠자기"
        },
        {
            id : 2,
            text: "유튜브보기"
        },
        {
            id : 3,
            text: "넷플릭스보기"
        }
    ]
};

function todoApp(state = initState, action) {
    switch(action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {           // 빈 객체{} 에 뒤에 것을 붓는다. 클론뜨는 것
                todos: [...state.todos, {text:action.todo}]
            });
        case DELETE_TODO:
            return Object.assign({}, state, {           // 빈 객체{} 에 뒤에 것을 붓는다. 클론뜨는 것
                todos: [...state.todos, {text:action.todo}]
            });
        default:
            return state;
    }
}



export default todoApp;