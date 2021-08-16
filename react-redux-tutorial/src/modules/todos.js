import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const CHANGE_INPUT = 'CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo를 체크/체크 해제함
const REMOVE = 'todos/REMOVE'; // todo를 제거함

export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3; // 호출될 때마다 1씩 더해짐
export const insert = createAction(INSERT, text => ({
    id: id++,
    text,
    done: false
}));

export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

// 위 코드는 아래와 같음
// export const changeInput = input => ({
//     type: CHANGE_INPUT,
//     input
// });

// let id = 3;
// export const insert = text => ({
//     type: INSERT,
//     todo: {
//         id: id++,
//         text,
//         done: false
//     }
// });

// export const toggle = id => ({
//     type: TOGGLE,
//     id
// });

// export const remove = id => ({
//     type: REMOVE,
//     id
// });

const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '티모송 듣기',
            done: true
        },
        {
            id: 2,
            text: '티모 하기',
            done: false
        }
    ]
};

const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, {payload: input}) => (
            produce(state, draft => {
                draft.input = input;
            })
        ),
        [INSERT]: (state, {payload: todo}) => (
            produce(state, draft => {
                draft.todos.push(todo);
            })
        ),
        [TOGGLE]: (state, {payload: id}) => (
            produce(state, draft => {
                const todo = draft.todos.find(todo => todo.id === id);
                todo.done = !todo.done;
            })
        ),
        [REMOVE]: (state, {payload: id}) => (
            produce(state, draft => {
                const index = draft.todos.findIndex(todo => todo.id === id);
                draft.todos.splice(index, 1);
            })
        )
    },
    initialState
);

// 위 코드는 아래와 같음
// function todos(state=initialState, action){
//     switch(action.type) {
//         case CHANGE_INPUT:
//             return {
//                 ...state,
//                 input: action.input
//             };
//         case INSERT:
//             return {
//                 ...state,
//                 todos: state.todos.concat(action.todo)
//             };
//         case TOGGLE:
//             return {
//                 ...state,
//                 todos: state.todos.map(todo => todo.id === action.id ? {...todo, done: !todo.done} : todo)
//             };
//         case REMOVE:
//             return {
//                 ...state,
//                 todos: state.todos.filter(todo => todo.id !== action.id)
//             };
//         default: return state;
//     }
// }

export default todos;