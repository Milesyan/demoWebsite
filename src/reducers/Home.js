import { ActionTypes } from '../actions/ActionTypes';
export const HOME_STATUS = {
  initial: Symbol(),
  preview: Symbol(),
  process: Symbol(),
  done: Symbol()
}
const defaultState = {
  status: HOME_STATUS.initial
}
const Home = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SET_HOME_STATUS_INITIAL:
      return { status: HOME_STATUS.initial };
    case ActionTypes.SET_HOME_STATUS_PREVIEW:
      return { status: HOME_STATUS.preview };
    case ActionTypes.SET_HOME_STATUS_PROCESS:
      return { status: HOME_STATUS.process };
    case ActionTypes.SET_HOME_STATUS_DONE:
      return { status: HOME_STATUS.done };
    default:
      return state;
  }
}

export default Home;