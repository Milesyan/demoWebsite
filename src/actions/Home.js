import { ActionTypes } from './ActionTypes';

export function setHomeStatusInitial() {
  return {
    type: ActionTypes.SET_HOME_STATUS_INITIAL,
  };
}


export function setHomeStatusPreview() {
  return {
    type: ActionTypes.SET_HOME_STATUS_PREVIEW,
  };
}

export function setHomeStatusProcess() {
  return {
    type: ActionTypes.SET_HOME_STATUS_PROCESS,
  };
}

export function reset() {
  return {
    type: ActionTypes.RESET
  }
}

export function setHomeLoginDialogStatus(status) {
  return {
    type: ActionTypes.SET_LOGIN_DIALOG,
    payload: status
  }
}