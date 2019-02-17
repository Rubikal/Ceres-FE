import { Map } from 'immutable';
import {
  FORM_SUBMIT_FAILED,
  FORM_SUBMIT_SUCCEEDED
} from '../action-types/orders';

const initialState = new Map({
  formHasErrors: false
});

const orderForm = (state = initialState, action) => {
  switch(action.type) {
    case FORM_SUBMIT_FAILED:
	    return state.set('formHasErrors', true);
    case FORM_SUBMIT_SUCCEEDED:
	    return state.set('formHasErrors', false);
    default:
	return state;
  }
};

export default orderForm;
