// react
import React from 'react';
import ReactDOM from 'react-dom';

// redux
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// react-router
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router'; // react-router v4

// helpers
import registerServiceWorker from './utils/registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';

// basic containers
import AppActivityContainer from './containers/AppActivityContainer';
import HomeContainer from './containers/HomeContainer';
import ItemContainer from './containers/ItemContainer';

// reactstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'

// reducers
// import HomeReducer from './reducers/HomeReducer';

// react-router history
const history = createBrowserHistory();

// redux root reducer
const rootReducer = combineReducers({

});

// initial state
const initialState = {};

// main redux store
const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history)
        ),
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppActivityContainer>
                <Switch>
                    <Route path="/" component={HomeContainer} />
                    <Route path="/item/:id/" component={ItemContainer} />
                </Switch>
            </AppActivityContainer>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker();
