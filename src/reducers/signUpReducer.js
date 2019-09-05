import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from '../actions/actionTypes';

export default (state = [], action = {}) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return { ...state, loading: true };
    case REGISTER_USER_SUCCESS:
      return { loading: false, response: action.payload };
    case REGISTER_USER_FAILURE:
      return { ...state, loading: false, errors: action.payload };
    default:
      return state;
  }
};
