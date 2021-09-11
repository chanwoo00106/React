import { ActionType } from "../action-types";

const initialState = [{
    id: 1,
    name: 'Teemo',
    email: 'example@example.com',
    phone: '010-1234-1234'
}]

let id = 2;

const reducer = (state=initialState, action) => {
    switch(action.type){
        case ActionType.ADD:
            return [
                ...state,
                {
                    id: id++,
                    name: action.name,
                    email: action.email,
                    phone: action.phone
                }
            ];
        case ActionType.DLETE:
            return state.filter(x => x !== action.id);
        case ActionType.EDIT:
            return state[action.id - 1] = {
                id: action.id,
                name: action.name,
                email: action.email,
                phone: action.phone
            }
        default: return state;
    }
}

export default reducer;