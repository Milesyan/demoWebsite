import rootReduer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from '../sagas/index'
const sagaMiddleWare = createSagaMiddleWare()

const store = createStore(
  rootReduer,
  applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(rootSaga);

export default store;