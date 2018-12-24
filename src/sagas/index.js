import { all } from 'redux-saga/effects';
import { watchQueryPhotoData, watchUpdatePhotos, watchUpdateDebugPhotos } from './Photos';
import { watchAndLog } from './Logger';
export default function* rootSaga() {
  yield all([
    watchQueryPhotoData(),
    watchUpdatePhotos(),
    watchAndLog(),
    watchUpdateDebugPhotos()
  ])
}