import { ActionTypes } from '../actions/ActionTypes';

export const DIALOG_STATE = {
  initial: -1,
  loading: 0,
  success: 1,
  error: 2
}
const defaultState = {
  status: DIALOG_STATE.initial, 
  message: null
}
const RequestInvite = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_INVITE_LOADING:
      console.warn("IN loading");
      return { status: DIALOG_STATE.loading };
    case ActionTypes.REQUEST_INVITE_SUCCESS:
      console.warn("IN success request");
      return { status: DIALOG_STATE.success, message: null };
    case ActionTypes.REQUEST_INVITE_FAIL:
      console.warn("IN failed request");
      return { status: DIALOG_STATE.error, message: action.errorMsg }
    case ActionTypes.RESET_DIALOG_STATUS:
      console.warn("IN reset dialog");
      return { status: DIALOG_STATE.initial, message: null };
    default:
      return state;
  }
}

export default RequestInvite;