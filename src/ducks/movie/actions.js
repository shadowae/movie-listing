import types from './types';

const storeMovieList = (movieList) => ({
  type: types.LOAD_DATA_API,
  movieList,
});

export default {
  storeMovieList,
};
