const ADD = 'add';
const DELETE = 'delete';
const EDIT = 'edit';

export const add = contact => ({
    type: ADD,
    payload: contact
});

export const remove = id => ({
    type: DELETE,
    payload: id
});

export const edit = (id, contact) => ({
    type: EDIT,
    id,
    payload: contact
});


let id = 3;
const initialState = {
    contacts: [
        {
            id: 1,
            name: 'teemo',
            email: 'example@example.com',
            phone: '010-1234-1234'
        },
        {
            id: 2,
            name: 'JS하는 형우',
            email: 'ilikejs@naver.com',
            phone: '010-4321-4321'
        }
    ]
}

function reducer(state=initialState, action){
    switch(action.type){
        case ADD:
            return state.contacts.concat(id++ ,action.payload);
        case DELETE:
            return state.contacts.filter(x => x.id !== action.payload);
        case EDIT:
            return state.contacts[action.id - 1] = action.payload;
        default: return state;
    }
}

export default reducer;