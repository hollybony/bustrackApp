import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
//import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import signUpReducer from './reducers/signUpReducer';
import authReducer from './reducers/authReducer';


const logger = createLogger();

export default (initialState = {}) => (
  createStore(
    combineReducers({
      signUp: signUpReducer,
      auth : authReducer
    }),
    initialState,
    applyMiddleware(logger, thunk)
  )
);
