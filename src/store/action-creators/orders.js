import * as ordersActionTypes from '../action-types/orders';

export const updateOrderStatus = (uuid, status) => ({
  type: ordersActionTypes.UPDATE_ORDER_STATUS,
  payload: { uuid, status}
});

export const formSubmitSucceededAction = (values) => ({
  type: ordersActionTypes.FORM_SUBMIT_SUCCEEDED,
  payload: values.toJS()
});

export const formSubmitFailedAction = () => ({
  type: ordersActionTypes.FORM_SUBMIT_FAILED
});

export const createNewOrder = (payload) => ({
  type: ordersActionTypes.CREATE_NEW_ORDER,
  payload: payload
});
