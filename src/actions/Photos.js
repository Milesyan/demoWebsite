import { ActionTypes } from './ActionTypes';

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
  return {
    type: ActionTypes.QUERY_BABY_DATA,
    payload: babyId
  }
}

export function setDebugData() {
  return {
    type: ActionTypes.SET_DEBUG_DATA
  }
}