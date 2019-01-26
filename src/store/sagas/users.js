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
    yield window.location.reload();
    yield put(push('/'));
    yield console.log('The user: ', data);
    
  } catch (error) {
    // handle errors
  }
}

function* logoutUser(action) {
  try {
    yield removeLocalStorage('user');
    yield window.location.reload();
  } catch (error) {
    // handle errors
  }
}

/**
 * terms actions listened for that then call sagas. takeLatest watches for the action and
 * cancels out the saga if it's still running before the latest call to it.
 * @returns {IterableIterator<*|AllEffect|GenericAllEffect<any>>}
 */
export default function* terms() {
  yield all([
    takeLatest(usersActionTypes.LOGIN_USER, loginUser),
    takeLatest(usersActionTypes.LOGOUT_USER, logoutUser),
  ]);
}
