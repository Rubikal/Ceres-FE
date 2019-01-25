import * as usersActionTypes from '../action-types/users';

export const updateLoginState = ({state}) => ({
  type: usersActionTypes.UPDATE_LOGIN_STATE,
  payload: state
});

export const loginUser = () => ({
  type: usersActionTypes.LOGIN_USER
});

export const setUser = user => ({
  type: usersActionTypes.SET_USER,
  payload: user
});
