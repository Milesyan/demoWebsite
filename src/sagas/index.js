import { all } from 'redux-saga/effects';
import { watchQueryPhotoData, watchUpdatePhotos, watchUpdateDebugPhotos, watchReset } from './Photos';
import { watchAndLog } from './Logger';
export default function* rootSaga() {
  yield all([
    watchReset(),
    watchQueryPhotoData(),
    watchUpdatePhotos(),
    watchAndLog(),
    watchUpdateDebugPhotos()
  ])
}