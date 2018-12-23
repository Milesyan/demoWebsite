import { takeEvery } from 'redux-saga';
import { call, put, apply } from 'redux-saga/effects';
import ApiClient from '../network/ApiClient';
import { ActionTypes } from '../actions/ActionTypes';
import { setPhotos, setPosts } from '../actions/Photos'
import { setHomeStatusPreview } from '../actions/Home';

export function* watchQueryPhotoData() {
  yield takeEvery(ActionTypes.QUERY_BABY_DATA, queryPhotoData)
}

function* queryPhotoData(action) {
  const res = yield apply(ApiClient, ApiClient.queryPhotosData, [action.payload])
  const data = JSON.parse(res.data.photobookData);
  if (data && data.posts) {
    yield put(setPosts(data.posts));
    yield put(setPhotos(data.photos_data));
    yield put(setHomeStatusPreview())
  } else {
    console.error("NO DATA FETCHED FROM SERVER")
    alert("no data fetched from server")
  }
}