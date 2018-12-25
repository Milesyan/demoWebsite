import { takeEvery, takeLatest, delay } from 'redux-saga';
import { call, put, apply, take, all, fork } from 'redux-saga/effects';
import ApiClient from '../network/ApiClient';
import { ActionTypes } from '../actions/ActionTypes';
import Storage from '../localStorage';
import { reset, setHomeLoginDialogStatus } from '../actions/Home';

function* auth(userName, password) {
  try {
    const token = yield apply(ApiClient, ApiClient.login, [userName, password]);
    return token
  } catch (e) {
    yield put({type: "LOGIN_ERROR", e})
  }
}

export function* loginFlow() {
  while (true) {
    const res  = yield take(ActionTypes.LOGIN);
    const [userName, password] = res.payload;
    console.warn("LOGIN REQUEST", userName, password);
    const token = yield call(auth, userName, password);
    if (token && token.data.photobookLogin.token) {
      const tk = token.data.photobookLogin.token;
      yield apply(Storage, Storage.saveUserToken, [tk]);
      yield put(setHomeLoginDialogStatus(false))
    } else {
      alert("WRONG ADMIN USER ID AND PASSWORD!")
      yield put(setHomeLoginDialogStatus(true))
    }
  }
}

export function* checkToken() {
  yield takeEvery(ActionTypes.CHECK_TOKEN, function* () {
    const token = yield apply(Storage, Storage.getUserToken)
    if (token) {
      yield put(setHomeLoginDialogStatus(false))
    }
  })
}