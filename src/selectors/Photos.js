import { createSelector }  from 'reselect';


export const getPosts = state => state.Photos.photoPosts;
export const getPhotos = state => state.Photos.photoEntities;

export const getPostsWithPhotos = createSelector(
  getPosts,
  getPhotos,
  (posts, photos) => combinePostsWithPhotos(posts, photos)
)

const combinePostsWithPhotos = (posts, photos) => 
{
  for (const post of posts) {
    post.photoEntities = post.photos.map(pid=>photos[pid])
  }
  return posts
}