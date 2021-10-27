export const GET = "GET";
const SET = "SET";
const STATUS = "STATUS";

export const get = (id) => ({
  type: GET,
  id,
});

export const set = (data) => ({
  type: SET,
  data,
});

export const status = (code) => ({
  type: STATUS,
  code,
});

const initialState = { data: undefined, status: undefined };

function github(state = initialState, action) {
  switch (action.type) {
    case SET:
      return {
        ...state,
        data: action.data,
      };
    case STATUS:
      return {
        ...state,
        status: action.code,
        data: undefined,
      };
    default:
      return state;
  }
}

export default github;
