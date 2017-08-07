import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import gameReducer from './reducers/index';

const store = createStore(gameReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

export default store;
