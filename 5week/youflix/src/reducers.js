import {
    CHANGE_FULL_CONTENT,
    REQUEST_CONTENTS,
    RECEIVE_CONTENTS,
} from './actions';
import { combineReducers } from "redux";

function selectedContent(
    state = {
        viewContent: {}
    },
    action
) {
    switch (action.type) {
        case CHANGE_FULL_CONTENT:
            return Object.assign({}, state, {
                viewContent: action.content
            });
        default:
            return state;
    }
}

function contentsByYoutube(state = {
    isFetching: false,
    items: [],
}, action) {
    switch (action.type) {
        case REQUEST_CONTENTS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_CONTENTS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.content,
                lastUpdated: action.receiveAt
            });
        default:
            return state;
    }
}

// reduce 두 개를 합쳐줌
const rootReducter = combineReducers({
    contentsByYoutube,
    selectedContent
})

export default rootReducter;