import { ActionTypes } from '../actions/ActionTypes';
import { photos } from './__mock__/photos';
import produce from "immer"


const defaultState = {
  photos
}
const Home = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_IMAGE_INFO:
      const { dateStr, url, width, height} = action.payload;
      const nextState = produce(state, draftState => {
        let obj = draftState.photos[dateStr].find(obj => obj.url===url);
        obj.width = width;
        obj.height = height;
      })
      return nextState;
    default:
      return state;
  }
}

export default Home;