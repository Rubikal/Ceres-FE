/*
 Combines all the reducers in the app, and sets the names for the state children.
*/

import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import { reducer } from 'redux-form/immutable';

import orders from './orders';
import orderForm from './orderForm';
import submitItemsForm from './submitItems';
import users from './users';
import sidebar from './sidebar';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  form: reducer,
  orders: combineReducers({
    userOrders: orders,
    orderForm,
    submitItemsForm
  }),
  ui: combineReducers({
    sidebar
  }),
  users
});

export default rootReducer;
