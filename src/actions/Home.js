import { ActionTypes } from './ActionTypes';

export function showRequestInviteDialog() {
  return {
    type: ActionTypes.HOME_SHOW_REQUEST_INVITE_DIALOG,
  };
}

export function dismissRequestInviteDialog() {
  return {
    type: ActionTypes.HOME_DISMISS_REQUEST_INVITE_DIALOG,
  };
}
