import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from './App';
import reducer from './modules';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
