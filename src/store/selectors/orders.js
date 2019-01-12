export const formHasErrorsSelector = state => state.getIn(['orders', 'orderForm', 'formHasErrors']);
export const getFormErrorsSelector = state => state.getIn(['form', 'createOrderForm', 'submitErrors']);
