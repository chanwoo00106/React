import {combineReducers} from 'redux'; // 두 리듀서를 합쳐주는 함수
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
    counter,
    todos
});

export default rootReducer;