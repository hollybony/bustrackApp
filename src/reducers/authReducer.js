import {
  GET_TOKEN_REQUEST,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_FAILURE
} from '../actions/actionTypes';

export default (state = [], action = {}) => {
  switch (action.type) {
    case GET_TOKEN_REQUEST:
      return { ...state, loading: true };
    case GET_TOKEN_SUCCESS:
      return { loading: false, response: action.payload };
    case GET_TOKEN_FAILURE:
      return { ...state, loading: false, errors: action.payload };
    default:
      return state;
  }
};