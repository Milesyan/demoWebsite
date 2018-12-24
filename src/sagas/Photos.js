import { takeEvery, takeLatest } from 'redux-saga';
import { call, put, apply, take } from 'redux-saga/effects';
import ApiClient from '../network/ApiClient';
import { ActionTypes } from '../actions/ActionTypes';
import { setPhotos, setPosts } from '../actions/Photos'
import { setHomeStatusPreview, setHomeStatusProcess } from '../actions/Home';
import { photos as mockPhotos, photoPosts as mockPosts } from '../reducers/__mock__/photos';


export function* watchQueryPhotoData() {
  yield takeEvery(ActionTypes.QUERY_BABY_DATA, queryPhotoData)
}

function* queryPhotoData(action) {
  const res = yield apply(ApiClient, ApiClient.queryPhotosData, [action.payload])
  const data = JSON.parse(res.data.photobookData);
  if (data && data.posts) {
    yield put(setPosts(data.posts));
    yield put(setPhotos(data.photos_data));
  } else {
    alert("no data fetched from server")
  }
}

export function* watchUpdatePhotos() {
  const photos = yield take(ActionTypes.SET_PHOTOS);
  yield put(setHomeStatusPreview())
  const photoLength = Object.keys(photos.payload).length
  for (let i=0; i< photoLength;i++) {
    yield take(ActionTypes.UPDATE_IMAGE_INFO)
  }
  yield put(setHomeStatusProcess())
}

export function* watchUpdateDebugPhotos() {
  yield takeLatest(ActionTypes.SET_DEBUG_DATA, setDebugData)
}

function* setDebugData() {
  yield put(setPosts(mockPosts));
  yield put(setPhotos(mockPhotos));
  yield put(setHomeStatusPreview())
}
