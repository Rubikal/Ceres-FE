import {
  all,
  call,
  put,
  takeLatest,
  select,
} from 'redux-saga/effects';
import { push } from 'connected-react-router'
import { getRootURL } from '../../helpers/utils';
import { getJWT } from '../selectors/users';
import { post, get } from 'axios';
import * as ordersActionTypes from '../action-types/orders';
import * as ordersActionCreators from '../action-creators/orders';

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
    yield post(`${getRootURL()}/orders`, {
      data: action.payload,
    }, {
      headers: {
        Authorization: yield select(getJWT)
      },
    });
    yield put(push('/'));
  } catch {

  }
}

function* getOrders() {
  try {
    const { data: { data: orders } } = yield get(`${getRootURL()}/orders`, {
      headers: {
        Authorization: yield select(getJWT)
      },
    });
    yield put(ordersActionCreators.insertOrders(orders));
  } catch {

  }
}

function* getOldOrders() {
  try {
    const { data: { data: orders } } = yield get(`${getRootURL()}/old-orders`, {
      headers: {
        Authorization: yield select(getJWT)
      },
    });
    yield put(ordersActionCreators.insertOldOrders(orders));
  } catch {

  }
}

function* getOrder({payload: orderId}) {
  try {
    const { data: { data: order } } = yield get(`${getRootURL()}/orders/${orderId}`, {
      headers: {
        Authorization: yield select(getJWT)
      },
    });
    yield put(ordersActionCreators.setSelectedOrder(order));
  } catch {

  }
}

export default function* orders() {
  yield all([
    takeLatest(ordersActionTypes.UPDATE_ORDER_STATUS, updateOrderStatus),
    takeLatest(ordersActionTypes.FORM_SUBMIT_SUCCEEDED, createNewOrder),
    takeLatest(ordersActionTypes.GET_ORDERS, getOrders),
    takeLatest(ordersActionTypes.GET_ORDER, getOrder),
    takeLatest(ordersActionTypes.GET_OLD_ORDERS, getOldOrders),
  ]);
}
