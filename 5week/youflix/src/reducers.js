import { combineReducers } from 'redux';
import { REQUEST_CONTENTS, RECEIVE_CONTENTS, CHANGE_FULL_CONTENT, CHANGE_KEYWORD } from './actions';

// 리듀서: 기능을 가진 함수 , 퓨어 함수, 무조건 새로운 객체를 생성해야함
// state 생성
function contentsByYoutube(
  state = {
    isFetching: false,    
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_CONTENTS:      
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_CONTENTS:      
      return {
        ...state,
        isFetching: false,
        items: action.contents,
        lastUpdated: action.receiveAt
      }  
    default:
      return state;
  }
}

function selectedContent(state = {fullContent: {}}, action){
  switch (action.type) {    
    case CHANGE_FULL_CONTENT:
      return {
        ...state,
        fullContent: action.content
      }   
    default:
      return state;
  }
}

function selectedKeyword(state = {keyword: ''}, action){
  switch (action.type) {    
    case CHANGE_KEYWORD:
      return {
        ...state,
        keyword: action.keyword
      }   
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  contentsByYoutube,
  selectedContent,
  selectedKeyword
});

export default rootReducer;