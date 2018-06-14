import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import itemsReducer from './reducers/itemsReducer';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    itemsReducer
});

const initialState = {};

export const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            routerMiddleware(history)
        ),
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);