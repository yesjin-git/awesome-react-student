import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const createStoreWidthWiddleware = applyMiddleware(thunk)(createStore);

export default function configureStore(initialState){
  return createStoreWidthWiddleware(rootReducer, initialState);
}