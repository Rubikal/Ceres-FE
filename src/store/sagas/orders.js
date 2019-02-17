import {
  all,
  call,
  put,
  takeLatest,
  select,
} from 'redux-saga/effects';
import { getRootURL } from '../../helpers/utils';
import { getJWT } from '../selectors/users';
import { post } from 'axios';
import {reset} from 'redux-form';
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

function* createNewOrder(action) {
  try {
    // yield console.log('The new order is: ', action.payload);
    yield post(`${getRootURL()}/orders`, {
      data: action.payload,
    }, {
      headers: {
        Authorization: yield select(getJWT)
      },
    });
  } catch {

  }
}

export default function* orders() {
  yield all([
    takeLatest(ordersActionTypes.UPDATE_ORDER_STATUS, updateOrderStatus),
    takeLatest(ordersActionTypes.FORM_SUBMIT_SUCCEEDED, createNewOrder),
  ]);
}
