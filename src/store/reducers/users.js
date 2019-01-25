import { Map } from 'immutable';
import * as usersActionTypes from '../action-types/users';
import { getLocalStorage } from '../../helpers/cache';

const userFromLocalStorage = JSON.parse(getLocalStorage('user')); 
const initialState = Map({
  loginState: userFromLocalStorage.jwt ? 'loggedIn' : null,
  userInfo: Map(userFromLocalStorage)
});

const users = (state = initialState, action) => {
  switch (action.type) {
    case usersActionTypes.UPDATE_LOGIN_STATE:
      return state.set('loginState', action.payload);

    case usersActionTypes.SET_USER:
        return state
          .set('loginState', 'loggedIn')
          .set('userInfo', Map(action.payload));

    default:
      return state;
  }
};

export default users;
