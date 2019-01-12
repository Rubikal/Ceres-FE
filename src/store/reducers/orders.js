import { Map, List } from 'immutable';
import * as ordersActionTypes from '../action-types/orders';

const initialState = Map({
  activeOrders: List([]), // a list of all the active orders
  activeOrder: Map({ // the currently selected active order
    status: null
  }),
});

const orders = (state = initialState, action) => {
  switch (action.type) {
    case ordersActionTypes.UPDATE_ORDER_STATUS:
      const { status } = action.payload;
      return state.setIn(['activeOrder', 'status'], status);

    default:
      return state;
  }
};

export default orders;
