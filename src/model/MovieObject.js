import PropTypes from 'prop-types';

const MovieObject = PropTypes.shape({
  vote_count: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  video: PropTypes.bool.isRequired,
  vote_average: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  popularity: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  original_language: PropTypes.string.isRequired,
  original_title: PropTypes.string.isRequired,
  genre_ids: PropTypes.array,
  backdrop_path: PropTypes.string.isRequired,
  adult: PropTypes.bool.isRequired,
  overview: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
});

export default MovieObject;
