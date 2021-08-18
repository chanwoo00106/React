import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import rootReducer from './modules'; // index는 생략 가능
// import loggerMiddleware from './lib/loggerMiddleware';
import {createLogger} from 'redux-logger';

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);