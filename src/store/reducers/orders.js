import { Map, List } from 'immutable';
import * as ordersActionTypes from '../action-types/orders';

const initialState = Map({
  activeOrders: List(), // a list of all the active orders
  activeOrder: Map({ // the currently selected active order
    status: null
  }),
  selectedOrder: null,
  oldOrders: List(),
});

const orders = (state = initialState, action) => {
  switch (action.type) {
    case ordersActionTypes.UPDATE_ORDER_STATUS:
      const { status } = action.payload;
      return state.setIn(['activeOrder', 'status'], status);
    
    case ordersActionTypes.INSERT_ORDERS:
      return state.set('activeOrders', action.payload);

    case ordersActionTypes.INSERT_OLD_ORDERS:
      return state.set('oldOrders', action.payload);

    case ordersActionTypes.SET_SELECTED_ORDER:
      return state.set('selectedOrder', action.payload);
    default:
      return state;
  }
};

export default orders;
