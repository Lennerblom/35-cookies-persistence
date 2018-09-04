import React, {Component, Fragment } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import createStore from '../../lib/store';
import Dashboard from '../dashboard';
import Landing from '../landing';
import SignUp from '../signup';
const store = createStore();
//console.log('state LOG: ', store.getState())

export default class App extends Component {

    render() {
        return(
            <div>
              <Provider store={store}>
                <BrowserRouter>
                    <Fragment>
                      <Route exact path="/" component={Landing}/>
                      <Route exact path="/dashboard" component={Dashboard}/>
                      <Route exact path="/signup" component={SignUp}/>
                    </Fragment>
                </BrowserRouter>
              </Provider>
            </div>
        );
    }
}