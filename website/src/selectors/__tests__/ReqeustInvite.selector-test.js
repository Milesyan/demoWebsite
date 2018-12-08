import { getRequestDialogStatus, getRequestDialogMessage } from '../RequestInvite';

describe('Request Invite selectors', () => {

  it('should select data from store state correctly', () => {

    const mockState = {
      RequestInvite: {
        status: 1,
        message: 'example request invite message'
      }
    }

    expect(getRequestDialogStatus(mockState)).toBe(1);
    expect(getRequestDialogMessage(mockState)).toBe('example request invite message');
  });
  
});