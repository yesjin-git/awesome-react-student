import {ADD_TODO, DEL_TODO} from "./actions"

const initState = {
    todos: [
        {
            no: 1,
            text: "밥먹기"
        },
        {
            no: 2,
            text: "잠자기"
        },
        {
            no: 3,
            text: "유튜브보기"
        },
        {
            no: 4,
            text: "넷플릭스보기"
        }
    ]
}

function todoApp(state = initState, action) {
    switch (action.type) {
        case ADD_TODO:
            let newNo = (state.todos.length === 0) ? 1 : state.todos[state.todos.length - 1].no + 1
            return Object.assign({}, state, {
                todos: [...state.todos, {no:newNo, text:action.todo}]
            })
        case DEL_TODO:

            console.log("delete!!! - " + action.no)

            return Object.assign({}, state, {
                todos: state.todos.filter((todo) => {
                    return todo.no != action.no
                })
            })
        default:
            return state
    }
}

export default todoApp