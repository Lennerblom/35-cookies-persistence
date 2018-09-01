import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from '../middleware/logger';
import thunk from 'redux-thunk';

import authRed from '../reducer/auth.js';

const appReducer = combineReducers({authState: authRed});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => createStore(appReducer, composeEnhancers(applyMiddleware(thunk, logger)));