import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from '../middleware/logger';
import category from '../reducer/category';
import expense from '../reducer/expense-duck';

const appReducer = combineReducers({category, expense});

export default () => createStore(appReducer, applyMiddleware(logger));