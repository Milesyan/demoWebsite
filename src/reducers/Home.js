import { ActionTypes } from '../actions/ActionTypes';
import produce from 'immer';

export const HOME_STATUS = {
  initial: Symbol('initial'),
  preview: Symbol('preview'),
  process: Symbol('process'),
  done: Symbol('done')
}
const defaultState = {
  status: HOME_STATUS.initial,
  showLoginDialog: true
}
const Home = (state = defaultState, { type, payload }) => {

  switch (type) {
    case ActionTypes.SET_HOME_STATUS_INITIAL:
      return produce(state, draft=>{
        draft.status = HOME_STATUS.initial
      })
    case ActionTypes.SET_HOME_STATUS_PREVIEW:
      return produce(state, draft=>{
        draft.status = HOME_STATUS.preview
      })
    case ActionTypes.SET_HOME_STATUS_PROCESS:
      return produce(state, draft=>{
        draft.status = HOME_STATUS.process
      })
    case ActionTypes.SET_HOME_STATUS_DONE:
      return produce(state, draft=>{
        draft.status = HOME_STATUS.done
      })
    case ActionTypes.SET_LOGIN_DIALOG:
      return produce(state, draft => {
        draft.showLoginDialog = payload
      })
    default:
      return state;
  }
}

export default Home;