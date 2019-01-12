import { all, fork } from 'redux-saga/effects';
import ordersSagas from './orders';

/**
 * Saga that watches all other imported aggregated sagas
 * see: https://github.com/redux-saga/redux-saga/issues/124#issuecomment-285008334
 * use of all() needed for deprecation warning
 * @returns {IterableIterator<*|AllEffect|GenericAllEffect<any>>}
 */
export default function* rootSaga() {
  yield all([
     fork(ordersSagas),
     // and more imported sagas
  ]);
}
