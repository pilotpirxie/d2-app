import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// reducers
import itemsReducer from './reducers/itemsReducer';

// react-router history
export const history = createBrowserHistory();

// redux root reducer
const rootReducer = combineReducers({
    itemsReducer
});

// initial state
const initialState = {};

// main redux store
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