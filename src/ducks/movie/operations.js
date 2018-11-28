import axios from 'axios';
import actions from './actions';

const fetchCountryList = () => (dispatch) => {
  axios.get('https://api.themoviedb.org/3/discover/movie', {
    params: {
      api_key: 'bce9dffc7fd76a8ef5943bdf0bfedb56',
      'primary_release_date.gte': '2014-09-15',
      'primary_release_date.lte': '2014-10-22',
    },
    responseType: 'json',
  })
    .then((response) => {
      // console.log(response);
      dispatch(actions.storeMovieList(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
// const fetchCountryList = () => (dispatch) => {
//     if (countryListCachedData.length === 0) {
//         logger(`Initializing country list info, POST - ${countryListURL}`, 'INFO');
//         return fetch(countryListURL, generateFetchOptions(REQ_GET, REQ_BODY_JSON))
//             .then(checkStatusJson)
//             .then((countryList) => {
//                 const convertedCountryList = utils.convertCountryListDropdown(countryList);
//                 countryListCachedData = convertedCountryList;
//                 dispatch(actions.storeCountryList(countryListCachedData));
//             })
//             .catch((err) => {
//                 logger(`GET ${countryListURL} failed with error:`, 'ERROR', err);
//             });
//     }
//
//     return Promise.resolve(() => {
//         dispatch(actions.storeCountryList(countryListCachedData));
//     });
// };

export default {
  fetchCountryList,
};
