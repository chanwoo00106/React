import ReactDOM from "react-dom";
import user from "./modules/user";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./lib/userSaga";

import App from "./App";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(user, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
