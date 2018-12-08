/* eslint-disable no-undef */

import * as actions from '../RequestInvite';
import ApiClient  from '../../network/ApiClient';
import { ServerError } from '../../network/errors';

describe('Request invite actions', () => {

  it('should match snapshot for pure object actions', () => {
    expect(actions.requestInviteLoading()).toMatchSnapshot();
    expect(actions.requestInviteSuccess()).toMatchSnapshot();
    expect(actions.requestInviteFail("FAIL MESSAGE")).toMatchSnapshot();
    expect(actions.resetRequestInviteDialog()).toMatchSnapshot();
  });

  it('should dispatch invite success if reqeustInvite thunk action is called with correct response', async (done) => {
    const dispatch = jest.fn();
    ApiClient.requestInvite = mockAsyncFunc('Registered');
    const thunkRes = actions.requestInvite("MILES", "miles@gmail.com");
    await thunkRes(dispatch);
    expect(dispatch).toBeCalledWith(actions.requestInviteLoading());
    expect(dispatch).toBeCalledWith(actions.requestInviteSuccess());
    done();
  });
  
  it('should dispatch invite success action if reqeustInvite thunk action is called with unknown response', async (done) => {
    const dispatch = jest.fn();
    ApiClient.requestInvite = mockAsyncFunc('UNKONWN');
    const thunkRes = actions.requestInvite("MILES", "miles@gmail.com");
    try {
      await thunkRes(dispatch);
    } catch (e) {
      expect(e).toMatchSnapshot();
      done();
    }
  });

  it('should dispatch invite fail action with correct error message if server response throws an 400 error', async (done) => {
    const dispatch = jest.fn();
    ApiClient.requestInvite = async () => {
        const err = new ServerError({errorMessage : "EXAMPLE SERVER ERROR"});
        throw err;
      };
    const res = actions.requestInvite("MILES", "miles@error.com");
    await res(dispatch);
    expect(dispatch).toBeCalledWith(actions.requestInviteLoading());
    expect(dispatch).toBeCalledWith(actions.requestInviteFail("EXAMPLE SERVER ERROR"));
    done();
  });
  

  it('should dispatch invite fail action with Unkown Error message and throw the error', async (done) => {
    const dispatch = jest.fn();
    const err = new Error("General error");
    ApiClient.requestInvite = async () => {
      throw err;
    };
    const res = actions.requestInvite("MILES", "miles@error.com");
    try{
      await res(dispatch);
      expect(dispatch).toBeCalledWith(actions.requestInviteLoading());
      expect(dispatch).toBeCalledWith(actions.requestInviteFail("Unkown Error"));
    } catch (e) {
      expect(e).toBe(err);
      done();
    }
  });
  
});