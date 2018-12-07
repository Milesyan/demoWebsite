import rootReduer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
  rootReduer,
  applyMiddleware(thunk)
);

export default store;