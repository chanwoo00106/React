import data from '../db/data.json'

const ADDNEWS = 'NEWS/ADD';
const LIKE = 'NEWS/LIKE';
const TOGGLE = 'NEWS/TOGGLE';

export const addNews = (name, text, imgUrl, userImg) => ({
    type: ADDNEWS,
    payload: {
        name,
        text,
        img: imgUrl,
        userImg
    }
});

export const Like = id => ({type: LIKE, id});
export const Toggle = () => ({type: TOGGLE});


const initialState = [...data.write]

function News(state=initialState, action) {
    switch (action.type) {
        case ADDNEWS:
            state.push({
                ...action.payload,
                houre: new Date().getHours(),
                like: 0,
            });
            return state;
        
        case LIKE:
            const like = state.find(i => i.id === action.id);
            state.filter(i => i.id !== action.id);
            like.like++;
            state.concat(like);
            return state;

        case TOGGLE:
            return {
                ...state,
                toggle: !state.toggle
            }
        default: return state;
    }
}

export default News;