import { Map, merge } from 'immutable';
import * as usersActionTypes from '../action-types/users';
import { getLocalStorage } from '../../helpers/cache';

const userFromLocalStorage = JSON.parse(getLocalStorage('user'));
const walletFromLocalStorage = JSON.parse(getLocalStorage('wallet'));
const initialState = Map({
  loginState: !!userFromLocalStorage ? !!userFromLocalStorage.jwt ? 'loggedIn' : null : null,
  userInfo: Map(merge(userFromLocalStorage, {wallet: walletFromLocalStorage}))
});

const users = (state = initialState, action) => {
  switch (action.type) {
    case usersActionTypes.UPDATE_LOGIN_STATE:
      return state.set('loginState', action.payload);

    case usersActionTypes.SET_USER:
        return state
          .set('loginState', 'loggedIn')
          .set('userInfo', Map(action.payload));
    
    case usersActionTypes.UPDATE_WALLET:
      return state
        .setIn(['userInfo', 'wallet'], Map(action.payload));

    default:
      return state;
  }
};

export default users;
