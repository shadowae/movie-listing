import types from './types';
import { movieMock } from '../../constants/APIMock';

const initialState = movieMock;

const movie = (state = initialState, action) => {
  switch (action.type) {
    case types.INITIATE_CASE: {
      return initialState;
    }
    case types.LOAD_DATA_API: {
      return action.movieList;
    }
    default:
      return state;
  }
};

export default movie;
