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
  const res = yield call(ApiClient.queryPhotosData.bind(ApiClient), action.payload )
  const data = JSON.parse(res.data.photobookData);
  if (data) {
    yield put(setPosts(data.posts));
    yield put(setPhotos(data.photos_data));
    yield put(setHomeStatusPreview())
  }
}