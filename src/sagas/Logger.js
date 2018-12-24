import { select, take } from 'redux-saga/effects';


export function *watchAndLog() {
 while (true) {
   const action = yield take('*');
   const state = yield select();
   console.warn('Action', action);
   console.warn('State After', state)
 }
}
