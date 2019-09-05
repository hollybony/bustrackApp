import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import signUpReducer from './reducers/signUpReducer';
import signInReducer from './reducers/signInReducer';

const logger = createLogger();

export default (initialState = {}) => (
  createStore(
    combineReducers({
      signUp: signUpReducer,
      signIn : signInReducer
    }),
    initialState,
    applyMiddleware(logger, thunk)
  )
);
