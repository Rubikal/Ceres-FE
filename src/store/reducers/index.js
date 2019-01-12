/*
 Combines all the reducers in the app, and sets the names for the state children.
*/

import { combineReducers } from 'redux';
import orders from './orders';

const rootReducer = combineReducers({
    orders
});

export default rootReducer;
