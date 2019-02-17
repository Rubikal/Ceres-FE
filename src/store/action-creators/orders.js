import * as ordersActionTypes from '../action-types/orders';

export const updateOrderStatus = (uuid, status) => ({
  type: ordersActionTypes.UPDATE_ORDER_STATUS,
  payload: { uuid, status}
});

export const formSubmitSucceededAction = values => ({
  type: ordersActionTypes.FORM_SUBMIT_SUCCEEDED,
  payload: values.toJS()
});

export const formSubmitFailedAction = () => ({
  type: ordersActionTypes.FORM_SUBMIT_FAILED
});

export const createNewOrder = payload => ({
  type: ordersActionTypes.CREATE_NEW_ORDER,
  payload: payload
});

export const getOrders = () => ({
  type: ordersActionTypes.GET_ORDERS
});

export const insertOrders = payload => ({
  type: ordersActionTypes.INSERT_ORDERS,
  payload: payload
});

export const getOldOrders = () => ({
  type: ordersActionTypes.GET_OLD_ORDERS
});

export const insertOldOrders = payload => ({
  type: ordersActionTypes.INSERT_OLD_ORDERS,
  payload: payload
});

export const getOrder = orderId => ({
  type: ordersActionTypes.GET_ORDER,
  payload: orderId
});

export const setSelectedOrder = order => ({
  type: ordersActionTypes.SET_SELECTED_ORDER,
  payload: order
})
