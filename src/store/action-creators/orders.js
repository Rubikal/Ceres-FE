import * as ordersActionTypes from '../action-types/orders';

export const updateOrderStatus = (uuid, status) => ({
  type: ordersActionTypes.UPDATE_ORDER_STATUS,
  payload: { uuid, status}
});

export const formSubmitSucceededAction = () => ({
  type: ordersActionTypes.FORM_SUBMIT_SUCCEEDED
});

export const formSubmitFailedAction = () => ({
  type: ordersActionTypes.FORM_SUBMIT_FAILED
});
