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
import { setUser } from '../action-creators/users';
import { getSlackCode } from '../selectors/router';
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
    yield console.log('The user: ', data);
    
  } catch (error) {
    // handle errors
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
  ]);
}
