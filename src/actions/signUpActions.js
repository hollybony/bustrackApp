import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS
} from './actionTypes';
import {reshapeErrors} from '../util/dataTransformations'

export const registerUser = user => {
  const req = fetch(`http://127.0.0.1:8080/api/auth/signup`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(user)
  });
  return dispatch => {
    dispatch({ type: REGISTER_USER_REQUEST, payload: user });
    req
      .then(resp => resp.json())
      .then(json => {
        console.log('register user response');
        console.log(json);
        if (json.error) {
          var error;
          if(json.errors){
            error = reshapeErrors(json.errors);
          }else{
            error = json.message;
          }
          dispatch({ type: REGISTER_USER_FAILURE, payload: error });
        } else {
          //localStorage.setItem("token", json.jwt)
          dispatch({ type: REGISTER_USER_SUCCESS, payload: json });
        }
      })
      .catch(function (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        dispatch({ type: REGISTER_USER_FAILURE, payload: error.message });
      })
  };
};