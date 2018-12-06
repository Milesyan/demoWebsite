import rootReduer from '../reducers';
import { createStore } from 'redux';

const store = createStore(rootReduer);

export default store;