import connect from 'react-redux/es/connect/connect';
import opD from '../ducks/movie';
import App from '../components/App';

const { fetchCountryList } = opD.operations;

const mapStateToProps = (state) => ({
  movieData: state.movie.results || [],
});
const mapDispatchToProps = {
  fetchCountryList,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
