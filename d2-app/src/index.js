import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';

import registerServiceWorker from './utils/registerServiceWorker';
import AppActivityContainer from './containers/AppActivityContainer';
import HomeContainer from './containers/HomeContainer';
import ItemContainer from './containers/ItemContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import './index.css';

import {store, history} from './store';

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
);

registerServiceWorker();
