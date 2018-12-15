import ApiClient from '../network/ApiClient';
import { ActionTypes } from './ActionTypes';
import { ServerError } from '../network/errors';

export function updateImageInfo(dateStr, url, width, height) {
  return {
    type: ActionTypes.UPDATE_IMAGE_INFO,
    payload: {dateStr, url, width, height}
  };
}


export function requestInvite(fullName, email) {
  return async (dispatch) => {
    // dispatch(requestInviteLoading());
    try {
      const r = await ApiClient.requestInvite(fullName, email)
      if (r === 'Registered') {
        // dispatch(requestInviteSuccess())
      } else {
        throw new Error(`Unknown 200 response >>> ${r}`);
      }
    } catch (error) { 
      if (error instanceof ServerError) {
        // dispatch(requestInviteFail(error.message.errorMessage || "Server Error with mo messsage"))
      } else {
        // dispatch(requestInviteFail("Unkown Error"));
        throw error;
      }
    }
  };
}
