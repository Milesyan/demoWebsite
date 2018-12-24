import { takeEvery, takeLatest, delay } from 'redux-saga';
import { call, put, apply, take, all } from 'redux-saga/effects';
import ApiClient from '../network/ApiClient';
import { ActionTypes } from '../actions/ActionTypes';
import { setPhotos, setPosts, setBaby } from '../actions/Photos'
import { setHomeStatusPreview, setHomeStatusProcess } from '../actions/Home';
import { photos as mockPhotos, photoPosts as mockPosts } from '../reducers/__mock__/photos';
import { baby as mockBaby } from '../reducers/__mock__/baby';


export function* watchQueryPhotoData() {
  yield takeLatest(ActionTypes.QUERY_BABY_DATA, queryPhotoData)
}

function* queryPhotoData(action) {
  try {
    const res = yield apply(ApiClient, ApiClient.queryPhotosData, [action.payload])
    const data = JSON.parse(res.data.photobookData);
    if (data && data.posts) {
      yield all([
        put(setPosts(data.posts)),
        put(setPhotos(data.photos_data)),
        put(setBaby(data.baby_data))
      ])
    } else {
      alert("no data fetched from server")
    }
  } catch (e){
    alert("Failed to fetch data");
  }
}

export function* watchUpdatePhotos() {
  const [photos, posts, baby] = yield all([
    take(ActionTypes.SET_PHOTOS),
    take(ActionTypes.SET_POSTS),
    take(ActionTypes.SET_BABY),
  ])
  yield call(delay, 1000)
  yield put(setHomeStatusPreview())
  const photoLength = Object.keys(photos.payload).length
  for (let i=0; i < photoLength; i++) {
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
  yield put(setBaby(mockBaby));
  yield put(setHomeStatusPreview())
}
