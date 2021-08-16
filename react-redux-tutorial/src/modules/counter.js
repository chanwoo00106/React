import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 더 쉽게 액션 함수를 선언할 수 있다.
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 위 코드는 아래와 같음
// export const increase = () => ({type: INCREASE});
// export const decrease = () => ({type: DECREASE});


const initialState = {
    number: 0
}

// 첫 번째 파라미터에는 각 액션에 대한 업데이트 함수를 넣어 주고,
// 두 번째 파라미터에는 초기 상태를 넣어 줌
const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({number: state.number + 1}),
        [DECREASE]: (state, action) => ({number: state.number - 1}),
    },
    initialState
)

// 위 코드는 아래와 같다
// function counter(state=initialState, action){
//     switch(action.type) {
//         case INCREASE:
//             return {
//                 number: state.number + 1
//             };
//         case DECREASE:
//             return {
//                 number: state.number - 1
//             };
//         default:
//             return state;
//     }
// }

export default counter;