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

/**
 * terms actions listened for that then call sagas. takeLatest watches for the action and
 * cancels out the saga if it's still running before the latest call to it.
 * @returns {IterableIterator<*|AllEffect|GenericAllEffect<any>>}
 */
export default function* terms() {
  yield all([
    takeLatest(ordersActionTypes.UPDATE_ORDER_STATUS, updateOrderStatus),
  ]);
}
