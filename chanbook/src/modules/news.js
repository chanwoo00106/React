import data from '../db/data.json'

const ADDNEWS = 'NEWS/ADD';
const LIKE = 'NEWS/LIKE';

export const addNews = (name, text, imgUrl) => ({
    type: ADDNEWS,
    payload: {
        name,
        text,
        img: imgUrl,
    }
});

export const Like = id => ({type: LIKE, id});


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
            state.filter(i => i.id === action.id);
            like.like++;
            state.concat(like);
            return state;
        default: return state;
    }
}

export default News;