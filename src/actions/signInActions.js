import {
  GET_TOKEN_REQUEST,
  GET_TOKEN_FAILURE,
  GET_TOKEN_SUCCESS,
  REMOVE_TOKEN
} from './actionTypes';
import { reshapeErrors } from '../util/dataTransformations'

export const loadToken = credentials => {
  const req = fetch(`http://127.0.0.1:8080/api/auth/signin`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(credentials)
  });
  console.log('credentials');
  console.log(credentials);
  return dispatch => {
    dispatch({ type: GET_TOKEN_REQUEST, payload: credentials });
    req
      .then(resp => resp.json())
      .then(json => {
        if (json.error) {
          var error;
          if (json.errors) {
            error = reshapeErrors(json.errors);
          } else {
            error = json.message;
          }
          dispatch({ type: GET_TOKEN_FAILURE, payload: error });
        } else {
          console.log('token gotten');
          console.log(json);
          dispatch({ type: GET_TOKEN_SUCCESS, payload: json.accessToken });
        }
      })
      .catch(function (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        dispatch({ type: GET_TOKEN_FAILURE, payload: error.message });
      })
  };
};

export const removeToken = () => {
  console.log('remove token');
  return dispatch => {
    dispatch({ type: REMOVE_TOKEN })
  };
};