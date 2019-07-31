import { combineReducers } from "redux";
import {
    REQUEST_CONTENTS,
    RECEIVE_CONTENTS,
    CHANGE_FULL_CONTENT
} from "./actions";

const initalState = {
    isFetching: false,
    items: [],
    viewContent: {},
    lastUpdated: Date.now()
}

function selectedContent(state = initalState, action) {
    switch (action.type) {
        case CHANGE_FULL_CONTENT:
            return Object.assign({},state,{
                viewContent: action.content
            });
        default:
            return state;
    }
}

function contentsByYoutube(state = initalState, action) {
    switch(action.type) {
        case REQUEST_CONTENTS:
            return Object.assign({},state,{
                isFetching: true
            });
        case RECEIVE_CONTENTS:
            return Object.assign({},state,{
                isFetching: false,
                items: action.contents,
                lastUpdated: action.receivedAt
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    contentsByYoutube,
    selectedContent
});

export default rootReducer;