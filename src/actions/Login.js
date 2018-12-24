import { ActionTypes } from './ActionTypes';

export function login(userName, password) {
  return {
    type: ActionTypes.LOGIN,
    payload: [userName, password]
  };
}

export function checkToken() {
  return {
    type: ActionTypes.CHECK_TOKEN
  }
}