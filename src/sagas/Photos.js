import { takeEvery, takeLatest, delay } from 'redux-saga';
import { call, put, apply, take, all } from 'redux-saga/effects';
import ApiClient from '../network/ApiClient';
import { ActionTypes } from '../actions/ActionTypes';
import { setPhotos, setPosts, setBaby } from '../actions/Photos'
import { setHomeStatusPreview, setHomeStatusProcess, setHomeStatusInitial } from '../actions/Home';
import { photos as mockPhotos, photoPosts as mockPosts } from '../reducers/__mock__/photos';
import { baby as mockBaby } from '../reducers/__mock__/baby';



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

function* setDebugData() {
  yield all([
    yield put(setPosts(mockPosts)),
    yield put(setPhotos(mockPhotos)),
    yield put(setBaby(mockBaby))
  ])
}

export function* watchReset() {
  yield takeEvery(ActionTypes.RESET, function* () {
    yield all([
      put(setPosts(null)),
      put(setPhotos(null)),
      put(setBaby(null))
    ])
    yield put(setHomeStatusInitial())
  })
}

export function* watchUpdatePhotos() {
  while (true) {
    const [photos] = yield all([
      take(ActionTypes.SET_PHOTOS),
      take(ActionTypes.SET_POSTS),
      take(ActionTypes.SET_BABY),
    ])
    if (photos && photos.payload && Object.keys(photos.payload).length) {
      yield put(setHomeStatusPreview())
      for (let i=0; i < Object.keys(photos.payload).length; i++) {
        yield take(ActionTypes.UPDATE_IMAGE_INFO)
      }
      yield put(setHomeStatusProcess())
    } else {
      console.error("NO PHOTOS FETCHED FROM SERVER");
    }
  }
}

export function* watchQueryPhotoData() {
  yield takeLatest(ActionTypes.QUERY_BABY_DATA, queryPhotoData)
}

export function* watchUpdateDebugPhotos() {
  yield takeLatest(ActionTypes.SET_DEBUG_DATA, setDebugData)
}

