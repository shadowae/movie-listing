import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import MovieDuck from './ducks/movie';

const { reducers: movie } = MovieDuck;

export default combineReducers({
  movie,
  routing,
});
