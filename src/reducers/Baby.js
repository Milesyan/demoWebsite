import { ActionTypes } from '../actions/ActionTypes';
import { baby } from './__mock__/baby';

const initialState = {
  baby
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case ActionTypes.SET_BABY_INFO:
    return { ...state, ...payload }

  default:
    return state
  }
}
