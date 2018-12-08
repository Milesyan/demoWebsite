import RequestInvite, { DIALOG_STATE } from '../RequestInvite';
import * as actions from '../../actions/RequestInvite';

const state = {
  state: DIALOG_STATE.initial,
  message: null
}

describe('RequestInvte state', () => {

  it('should return correct store when loading action is dispatched', () => {
    expect(RequestInvite(state, actions.requestInviteLoading())).toEqual({
      status: DIALOG_STATE.loading,
      message: null
    });
  });

  it('should return correct store when success action is dispatched', () => {
    expect(RequestInvite(state, actions.requestInviteSuccess())).toEqual({
      status: DIALOG_STATE.success,
      message: null
    });
  });

  it('should return correct store when request error action is dispatched', () => {
    expect(RequestInvite(state, actions.requestInviteFail("EXAMPLE ERROR MSG"))).toEqual({
      status: DIALOG_STATE.error,
      message: "EXAMPLE ERROR MSG"
    });
  });

  it('should return correct store when reset action is dispatched', () => {
    expect(RequestInvite(state, actions.resetRequestInviteDialog())).toEqual({
      status: DIALOG_STATE.initial,
      message: null
    });
  });
  
});