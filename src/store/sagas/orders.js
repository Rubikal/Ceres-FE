import {
  all,
  call,
  put,
  takeLatest,
  select,
} from 'redux-saga/effects';
import * as ordersActionTypes from '../action-types/orders';

/**
 * @param {object} action
 * @returns {IterableIterator<*>}
 */
function* updateOrderStatus(action) {
  try {
    // send the request
  } catch (error) {
    // handle errors
  }
}

export default function* orders() {
  yield all([
    takeLatest(ordersActionTypes.UPDATE_ORDER_STATUS, updateOrderStatus),
  ]);
}
