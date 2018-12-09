import { ActionTypes } from '../actions/ActionTypes';
const defaultState = {
  showRequestInviteDialog: false
}
const Home = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.HOME_SHOW_REQUEST_INVITE_DIALOG:
      return { showRequestInviteDialog: true };
    case ActionTypes.HOME_DISMISS_REQUEST_INVITE_DIALOG:
      return { showRequestInviteDialog: false };
    default:
      return state;
  }
}

export default Home;