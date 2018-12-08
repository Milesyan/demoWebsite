import ApiClient from '../ApiClient';
import { ServerError } from '../errors';

describe('API test for request invite', () => {
  
  it('should return correct response for regular name and email', async (done) => {
    const res = await ApiClient.requestInvite('Miles', 'miles_yan@test.com');
    expect(res).toBe("Registered");
    done();
  });

  it('should throw a server error for special email', async (done) => {
    try {
      const res = await ApiClient.requestInvite("miles", "usedemail@airwallex.com");
    } catch (e) {
      expect(e).toBeInstanceOf(ServerError);
      expect(e.message.errorMessage).toBe("Bad Request: Email is already in use");
      done();
    }
  });

});