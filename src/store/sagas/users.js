import {
  all,
  call,
  put,
  takeLatest,
  select,
} from 'redux-saga/effects';
import axios from 'axios';
import {getRootURL} from '../../helpers/utils';
import * as usersActionTypes from '../action-types/users';
import { getSlackCode } from '../selectors/router';

/**
 * @param {object} action
 * @returns {IterableIterator<*>}
 */
function* loginUser(action) {
  try {
    const code = yield select(getSlackCode);
    yield axios.post(`${getRootURL()}/login`, {
      code
    });
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
  ]);
}
