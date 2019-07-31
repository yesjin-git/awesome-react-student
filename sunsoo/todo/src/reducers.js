import { SET_VISIBILITY_FILTER, ADD_TODO, COMPLETE_TODO } from './actions';

export const VisibilityFilter = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLTED: "SHOW_COMPLTED",
    SHOW_ACTIVE: "SHOW_ACTIVE"
}

const initalState = {
    visibilityFilter: VisibilityFilter.SHOW_ALL,
    todos: [
        {
            text: "장보기",
            completed: true
        },
        {
            text: "잠자기",
            completed: true
        }
    ]
}

function todoApp(state=initalState, action) {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            });
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        complete: false
                    }
                ]
            });
        case COMPLETE_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos.slice(0,action.index),
                    Object.assign({},state.todos[action.index],{
                        complete: true
                    }),
                    ...state.todos.slice(action.index+1)
                ]
            });
        default:
            return state;
    }
}

export default todoApp;