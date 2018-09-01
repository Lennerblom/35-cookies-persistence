import React, {Component, Fragment } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import createStore from '../../lib/store';
import Dashboard from '../dashboard';
import Landing from '../landing';

const store = createStore();
//console.log('state LOG: ', store.getState())

export default class App extends Component {

    render() {
        return(
            <div>
              <Provider store={store}>
                <BrowserRouter>
                    <Fragment>
                      <Route exact path="/login" component={Landing}/>
                      <Route exact path="/dashboard" component={Dashboard}/>
                    </Fragment>
                </BrowserRouter>
              </Provider>
            </div>
        );
    }
}