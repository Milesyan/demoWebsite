import HomeReducer from '../Home';
import * as actions from '../../actions/Home';

const state = {
  showRequestInviteDialog: false
}
describe('Home reducer state', () => {

  it('should return correct showRequestInviteDialog flag when showRequestInviteDialog action is dispatched', () => {
    expect(HomeReducer(state, actions.showRequestInviteDialog())).toEqual({
      showRequestInviteDialog: true
    });
  });

  it('should return correct showRequestInviteDialog flag when dismissRequestInviteDialog action is dispatched', () => {
    const mockState = {
      showRequestInviteDialog: true
    }
    expect(HomeReducer(mockState, actions.dismissRequestInviteDialog())).toEqual({
      showRequestInviteDialog: false
    });
  });
  
});