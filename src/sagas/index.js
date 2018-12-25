import { all, fork } from 'redux-saga/effects';
import { watchQueryPhotoData, watchUpdatePhotos, watchUpdateDebugPhotos, watchReset } from './Photos';
import { watchAndLog } from './Logger';
import { loginFlow, checkToken} from './Login';

export default function* rootSaga() {
  yield all([
    fork(watchReset),
    fork(watchQueryPhotoData),
    fork(watchUpdatePhotos),
    fork(watchAndLog),
    fork(watchUpdateDebugPhotos),
    fork(loginFlow),
    fork(checkToken)
  ])
}