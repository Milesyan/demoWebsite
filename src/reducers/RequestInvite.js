import { ActionTypes } from '../actions/ActionTypes';

export const DIALOG_STATE = {
  initial: Symbol(),
  loading: Symbol(),
  success: Symbol(),
  error: Symbol()
}
const defaultState = {
  status: DIALOG_STATE.initial, 
  message: null
}
const RequestInvite = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_INVITE_LOADING:
      return { status: DIALOG_STATE.loading, message: null };
    case ActionTypes.REQUEST_INVITE_SUCCESS:
      return { status: DIALOG_STATE.success, message: null };
    case ActionTypes.REQUEST_INVITE_FAIL:
      return { status: DIALOG_STATE.error, message: action.errorMsg }
    case ActionTypes.RESET_DIALOG_STATUS:
      return { status: DIALOG_STATE.initial, message: null };
    default:
      return state;
  }
}

export default RequestInvite;