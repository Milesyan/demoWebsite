import { getShowRequestInviteDialogStatus } from '../Home';

describe('Home status selectors', () => {

  it('should select home dialog status flag from store state correctly', () => {
    const mockState = {
      Home: {
        showRequestInviteDialog: true
      }
    }
    expect(getShowRequestInviteDialogStatus(mockState)).toBe(true);
    mockState.Home.showRequestInviteDialog = false;
    expect(getShowRequestInviteDialogStatus(mockState)).toBe(false);
  });
  
});