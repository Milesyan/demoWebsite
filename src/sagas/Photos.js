import { takeEvery, takeLatest, delay } from 'redux-saga';
import { call, put, apply, take, all } from 'redux-saga/effects';
import ApiClient from '../network/ApiClient';
import { ActionTypes } from '../actions/ActionTypes';
import { setPhotos, setPosts, setBaby } from '../actions/Photos'
import { setHomeStatusPreview, setHomeStatusProcess, setHomeStatusInitial, setHomeLoginDialogStatus} from '../actions/Home';
import { photos as mockPhotos, photoPosts as mockPosts } from '../reducers/__mock__/photos';
import { baby as mockBaby } from '../reducers/__mock__/baby';
import Storage from '../localStorage';

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

export function* watchQueryPhotoData() {
  yield takeLatest(ActionTypes.QUERY_BABY_DATA, queryPhotoData)
}

export function* watchUpdateDebugPhotos() {
  yield takeLatest(ActionTypes.SET_DEBUG_DATA, setDebugData)
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
      alert("No photos found for this baby");
      console.error("NO PHOTOS FETCHED FROM SERVER");
    }
  }
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
      if (data && data.errmsg === "authorization expired") {
        alert("Token Expired")
        yield apply(Storage, Storage.clearUserToken);
        yield put(setHomeLoginDialogStatus(true))
      } else if (res.errors) {
        console.warn("SERVER ERROR", res.errors);
        alert("Server met some errors");
      } else {
        alert("no data fetched from server");
      }
    }
  } catch (e){
    console.warn('ERROR', e);

    alert("Failed to fetch data");
  }
}

function* setDebugData() {
  yield all([
    put(setPosts(mockPosts)),
    put(setPhotos(mockPhotos)),
    put(setBaby(mockBaby))
  ])
}