export const GET = "GET";
const SET = "SET";

export const get = (id) => ({
  type: GET,
  id,
});

export const set = (data) => ({
  type: SET,
  data,
});

const initialState = {};

function github(state = initialState, action) {
  switch (action.type) {
    case SET:
      return action.data;
    default:
      return state;
  }
}

export default github;
