import { ActionTypes } from '../actions/ActionTypes';
import produce from 'immer';

const initialState = {
  baby: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_BABY:
      const postState = produce(state, draft => {
        draft.baby = payload
      })
      return postState;

    default:
      return state
  }
}
