import {
  all,
  call,
  put,
  takeLatest,
  select,
} from 'redux-saga/effects';
import axios from 'axios';
import { push } from 'connected-react-router';
import {getRootURL} from '../../helpers/utils';
import * as usersActionTypes from '../action-types/users';
import { setUser, updateWallet } from '../action-creators/users';
import { getSlackCode } from '../selectors/router';
import { getJWT } from '../selectors/users';
import { setLocalStorage, removeLocalStorage } from '../../helpers/cache';

/**
 * @param {object} action
 * @returns {IterableIterator<*>}
 */
function* loginUser(action) {
  try {
    const code = yield select(getSlackCode);
    const { data } = yield axios.post(`${getRootURL()}/login`, {
      code
    });
    yield setLocalStorage('user', data);
    yield put(setUser(data));
    yield window.location = '/';
  } catch (error) {
    // handle errors
  }
}

function* getWallet(action) {
  try {
    const {
      data: wallet
    } = yield axios.get(`${getRootURL()}/wallet`, {
      headers: {
        Authorization: yield select(getJWT)
      }
    });
    yield setLocalStorage('wallet', wallet);
    yield put(updateWallet(wallet))
  } catch {

  }
}

function* logoutUser(action) {
  try {
    yield removeLocalStorage('user');
    yield window.location = '/login';
  } catch (error) {
    // handle errors
  }
}

export default function* users() {
  yield all([
    takeLatest(usersActionTypes.LOGIN_USER, loginUser),
    takeLatest(usersActionTypes.LOGOUT_USER, logoutUser),
    takeLatest(usersActionTypes.GET_WALLET, getWallet),
  ]);
}
