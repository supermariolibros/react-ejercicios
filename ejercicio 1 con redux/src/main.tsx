import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from "./app";
import { createStore, applyMiddleware, compose  } from "redux";
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {membersReducer } from './reducer';

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const store = createStore(membersReducer, /* preloadedState, */ composeEnhancers(
   applyMiddleware(reduxThunk)
 ));

ReactDOM.render(
  <Provider store={store}>
   <>
  <App />
  </>
  </Provider>
  ,
  document.getElementById('root')
);
