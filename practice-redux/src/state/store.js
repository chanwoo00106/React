import { createStore } from "redux";
import reducer from './reducers/contact';
const store = createStore(reducer);

export default store;