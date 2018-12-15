import ApiClient from '../network/ApiClient';
import { ActionTypes } from './ActionTypes';
import { ServerError } from '../network/errors';

export function requestInviteLoading() {
  return {
    type: ActionTypes.REQUEST_INVITE_LOADING,
  };
}

export function requestInviteSuccess() {
  return {
    type: ActionTypes.REQUEST_INVITE_SUCCESS,
  };
}

export function requestInviteFail(msg) {
  return {
    type: ActionTypes.REQUEST_INVITE_FAIL,
    errorMsg: msg
  };
}

export function resetRequestInviteDialog() {
  return {
    type: ActionTypes.RESET_DIALOG_STATUS
  }
}

export function requestInvite(fullName, email) {
  return async (dispatch) => {
    dispatch(requestInviteLoading());
    try {
      const r = await ApiClient.requestInvite(fullName, email)
      if (r === 'Registered') {
        dispatch(requestInviteSuccess())
      } else {
        throw new Error(`Unknown 200 response >>> ${r}`);
      }
    } catch (error) { 
      if (error instanceof ServerError) {
        dispatch(requestInviteFail(error.message.errorMessage || "Server Error with mo messsage"))
      } else {
        dispatch(requestInviteFail("Unkown Error"));
        throw error;
      }
    }
  };
}
