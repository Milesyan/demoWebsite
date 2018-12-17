import ApiClient from '../network/ApiClient';
import { ActionTypes } from './ActionTypes';
import { ServerError } from '../network/errors';

export function updateImageInfo(id, width, height) {
  return {
    type: ActionTypes.UPDATE_IMAGE_INFO,
    payload: {id, width, height}
  };
}
