import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router/immutable';
import reducers from './reducers';
import rootSaga from './sagas/index';

export const history = createBrowserHistory();

export default function configureStore({ environment }) {
    const reduxSagaMonitorOptions =
        environment !== 'production'
        && typeof window === 'object'
        && window.__SAGA_MONITOR_EXTENSION__
            ? { sagaMonitor: window.__SAGA_MONITOR_EXTENSION__ }
            : {};

    const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
    const connectedRouterMiddleware = routerMiddleware(history);
    const middlewares = [
        sagaMiddleware,
        connectedRouterMiddleware,
        // When in dev mode, detects whether a mutation occurs in reducers and notifies via console.error
        ...(environment !== 'production'
                // TODO try to get working as ES import for consistency
                ? [require('redux-immutable-state-invariant').default()]
                : []
        )
    ];
    const enhancers = [applyMiddleware(...middlewares)];

    // If Redux DevTools Extension is installed use it, otherwise use Redux compose
    const composeEnhancers = environment !== 'production'
    && typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Prevent recomputing reducers for `replaceReducer`
            shouldHotReload: false,
        })
        : compose;

    const store = createStore(
        reducers(history),
        composeEnhancers(...enhancers),
    );

    // Run the root saga listening for actions
    store.runSaga = sagaMiddleware.run(rootSaga);

    return store;
}
