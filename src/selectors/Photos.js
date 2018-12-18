import { createSelector }  from 'reselect';
import produce from "immer"

export const getPosts = state => state.Photos.photoPosts;
export const getPhotos = state => state.Photos.photoEntities;

export const getPostsWithPhotos = createSelector(
  getPosts,
  getPhotos,
  (posts, photos) => combinePostsWithPhotos(posts, photos)
)

export const getPostsStartEndDate = createSelector(
  getPosts,
  (posts) => {
    if (!posts || posts.length < 2){
      return ''
    }
    const start = posts[0].date;
    const end = posts[posts.length - 1].date;
    const [sYear, sMonth,] = start.split('-');
    const [eYear, eMonth,] = end.split('-');
    return `${sYear}.${sMonth}-${eYear}.${eMonth}`
  }
)
const combinePostsWithPhotos = (posts, photos) => {
  const next = produce(posts, draft => {
    for (const post of draft) {
      post.photoEntities = post.photos.map(pid=>photos[pid])
    }
  });
  return next;
}
