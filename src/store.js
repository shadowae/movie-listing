import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from './reducer';

// import { browserHistory } from 'react-router';
// import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';

const initialState = {};

const store = createStore(reducer, initialState, compose(
  applyMiddleware(reduxThunk),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f,
));

// const create = window.devToolsExtension
//     ? window.devToolsExtension()(createStore)
//     : createStore;
// const createStoreWithMiddleWare = applyMiddleware(thunk, routerMiddleware(browserHistory))(create);
// const store = createStoreWithMiddleWare(reducer,
//     initialState);
//
// export const history = syncHistoryWithStore(browserHistory, store);

// const store = createStore(reducer, initialState);

export default store;
