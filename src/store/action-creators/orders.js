import * as ordersActionTypes from '../action-types/orders';

export const updateOrderStatus = (uuid, status) => ({
  type: ordersActionTypes.UPDATE_ORDER_STATUS,
  payload: { uuid, status}
});
