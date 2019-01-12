import * as ordersActionTypes from '../action-types/orders';

const initialState = {
  activeOrders: [], // a list of all the active orders
  activeOrder: { // the currently selected active order
    status: null
  },
};

const orders = (state = initialState, action) => {
  switch (action.type) {
    case ordersActionTypes.UPDATE_ORDER_STATUS:
      const { status } = action.payload;
      return {
        ...state,
        activeOrder: {
          ...state.activeOrder,
          status
        }
      };
    
    default:
      return state;
  }
};

export default orders;
