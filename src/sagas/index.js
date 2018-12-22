import { all } from 'redux-saga/effects';
import { watchQueryPhotoData } from './Photos';

export default function* rootSaga() {
  yield all([
    watchQueryPhotoData()
  ])
}