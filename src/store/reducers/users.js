import { Map } from 'immutable';
import * as usersActionTypes from '../action-types/users';

const initialState = Map({
  loginState: null, 
});

const users = (state = initialState, action) => {
  switch (action.type) {
    case usersActionTypes.UPDATE_LOGIN_STATE:
      return state.set('loginState', action.payload);

    default:
      return state;
  }
};

export default users;
