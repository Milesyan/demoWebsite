import { ActionTypes } from '../actions/ActionTypes';
import { photoPosts, photos } from './__mock__/photos';
import produce from "immer"


const defaultState = {
  photoPosts,
  photoEntities: photos
}
const Home = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_IMAGE_INFO:
      const { id, width, height} = action.payload;
      const nextState = produce(state, draftState => {
        let photo = draftState.photoEntities[id]
        photo.width = width;
        photo.height = height;
      })
      return nextState;
    default:
      return state;
  }
}

export default Home;