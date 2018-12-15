import { ActionTypes } from '../actions/ActionTypes';
import { photos } from './__mock__/photos';
const defaultState = {
  photos
}
const Home = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_IMAGE_INFO:
      const { dateStr, url, width, height} = action.payload;
      let obj = state.photos[dateStr].find(obj => obj.url===url);
      if (!obj) { break; }
      obj.width = width;
      obj.height = height;
      return {...state};
    default:
      return state;
  }
}

export default Home;