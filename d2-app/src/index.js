import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';

import registerServiceWorker from './utils/registerServiceWorker';
import AppActivityContainer from './containers/AppActivityContainer';
import HomeContainer from './containers/HomeContainer';
import ItemContainer from './containers/ItemContainer';
import SubmitFormContainer from './containers/SubmitFormContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import './index.css';

import {store, history} from './store';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppActivityContainer>
                <Switch>
                    <Route path="/item/:id/" component={ItemContainer} />
                    <Route path="/add" component={SubmitFormContainer} />
                    <Route path="/" component={HomeContainer} />
                </Switch>
            </AppActivityContainer>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
