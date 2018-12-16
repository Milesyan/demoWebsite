import { createSelector }  from 'reselect';
import produce from "immer"

export const getPosts = state => state.Photos.photoPosts;
export const getPhotos = state => state.Photos.photoEntities;

export const getPostsWithPhotos = createSelector(
  getPosts,
  getPhotos,
  (posts, photos) => combinePostsWithPhotos(posts, photos)
)

const combinePostsWithPhotos = (posts, photos) => {
  const next = produce(posts, draft => {
    for (const post of draft) {
      post.photoEntities = post.photos.map(pid=>photos[pid])
    }
  });
  return next;
}