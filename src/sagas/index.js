import { all } from 'redux-saga/effects';
import { watchQueryPhotoData, watchUpdatePhotos, watchUpdateDebugPhotos, watchReset } from './Photos';
import { watchAndLog } from './Logger';
import { loginFlow, checkToken} from './Login';

export default function* rootSaga() {
  yield all([
    watchReset(),
    watchQueryPhotoData(),
    watchUpdatePhotos(),
    watchAndLog(),
    watchUpdateDebugPhotos(),
    loginFlow(),
    checkToken()
  ])
}