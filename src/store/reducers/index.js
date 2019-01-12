/*
 Combines all the reducers in the app, and sets the names for the state children.
*/

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import orders from './orders';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  orders,
});

export default rootReducer;
