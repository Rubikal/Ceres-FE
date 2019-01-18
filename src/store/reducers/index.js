/*
 Combines all the reducers in the app, and sets the names for the state children.
*/

import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import { reducer } from 'redux-form/immutable';

import orders from './orders';
import orderForm from './orderForm';
import users from './users';

const rootReducer = (history) => combineReducers({
  users: users,
  router: connectRouter(history),
  form: reducer,
  orders: combineReducers({
    userOrders: orders,
    orderForm
  }),
});

export default rootReducer;
