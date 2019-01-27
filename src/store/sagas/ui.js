import {
  all,
  call,
  put,
  takeLatest,
  select,
} from 'redux-saga/effects';
import * as uiActionTypes from '../action-types/ui';
import { setLocalStorage } from '../../helpers/cache';

function* setNightMode(action) {
  try {
    yield setLocalStorage('nightMode', action.payload);
    yield window.location.reload();
  } catch (error) {
    // handle errors
  }
}

export default function* ui() {
  yield all([
    takeLatest(uiActionTypes.SET_NIGHT_MODE, setNightMode),
  ]);
}
