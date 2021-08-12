import { createStore } from "redux";

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector("#decrease");

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// actions
const toggleSwitch = () => ({type: TOGGLE_SWITCH});
const increase = difference => ({type: INCREASE, difference});
const decrease = () => ({type: DECREASE});

// reducers
// 변화를 일으키는 함수입니다. 액션을 만들어서 발생시키면 리듀서가 현재 상태와 전달받은 액션 객체를 파라미터로 받아옵니다.
const initialState = {
    toggle: false,
    counter: 0
};

function reducer(state=initialState, action) {
    switch(action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state,
                toggle: !state.toggle
            };
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference
            }
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state;
    }
}

// store
// 프로젝트에 리덕스를 적용하기 위해 스토어를 만듭니다. 한 개의 프로젝트는 단 하나의 스토어만 가질 수 있습니다.
// 스토어 안에는 현재 어플리케이션 상태와 리듀서가 들어가 있으며, 그외에도 몇 가지 중요한 내장 함수를 지닙니다.
const store = createStore(reducer);

const render = () => {
    const state = store.getState();

    if (state.toggle) {
        divToggle.classList.add('active');
    }else {
        divToggle.classList.remove('active');
    }

    counter.innerText = state.counter;
}

// subscribe
// 스토어의 내장 함수로 subscribe 함수 안에 함수를 파라미터로 넣어서 호출해 주면,
// 이 함수가 액션이 디스패치되어 업데이트될 때마다 호출됩니다.
const unsubscribe = store.subscribe(() => {console.log('상태가 업데이트됨')})
// unsubscribe(); subscribe취소


// subscribe - view - dispatch

render();
store.subscribe(render);

// dispatch
// 스토어의 내장 함수로 액션을 발생시키는 것이라고 이해하면 됩니다.
divToggle.onclick = () => {
    store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
    store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
    store.dispatch(decrease());
};