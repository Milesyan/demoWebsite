import { combineReducers } from 'redux';
import RequestInvite from './RequestInvite';
import Home from './Home';
import Photos from './Photos';
import Baby from './Baby';

export default combineReducers({
  RequestInvite,
  Home,
  Photos,
  Baby
})
