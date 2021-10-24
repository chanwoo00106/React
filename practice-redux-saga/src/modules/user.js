export const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

export const get_user = () => ({
  type: GET_USER,
});

export const set_user = (user) => ({
  type: SET_USER,
  user,
});

const initialState = {
  user: undefined,
};

function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      const { user } = action;
      return { ...state, user };
    default:
      return state;
  }
}

export default user;
