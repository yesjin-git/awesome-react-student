import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';

// applyMiddleware가 리턴하는 함수의 인자값 createStore
// applyMiddleware 먼저 실행되고 그다음에 createStore 실행
// currying 커링이라고 하는 방법
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

export default function configureStore(initialState){
    return createStoreWithMiddleware(rootReducer, initialState);
}