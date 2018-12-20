import ApiClient from '../network/ApiClient';
import { ActionTypes } from './ActionTypes';
import { setHomeStatusPreview } from './Home';
import { ServerError } from '../network/errors';

export function updateImageInfo(id, width, height) {
  return {
    type: ActionTypes.UPDATE_IMAGE_INFO,
    payload: {id, width, height}
  };
}

export function setPosts(posts) {
  return {
    type: ActionTypes.SET_POSTS,
    payload: posts
  }
}

export function setPhotos(photos) {
  return {
    type: ActionTypes.SET_PHOTOS,
    payload: photos
  }
}

export function queryBabyData(babyId) {
  return async (dispatch) => {
    const res = await ApiClient.queryPhotosData(babyId);
    const data = JSON.parse(res.data.photobookData);
    if (data) {
      dispatch(setPosts(data.posts));
      dispatch(setPhotos(data.photos_data));
      dispatch(setHomeStatusPreview());
    } else {
      alert("Please input the correct baby ID");
    }
  }
}