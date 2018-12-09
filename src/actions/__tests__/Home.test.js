import * as actions from '../Home'

describe('Home actions', () => {
  
  it('should match snapshot for pure object actions', () => {
    expect(actions.showRequestInviteDialog()).toMatchSnapshot();
    expect(actions.dismissRequestInviteDialog()).toMatchSnapshot();
  });

});
