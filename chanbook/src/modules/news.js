import data from '../db/data.json'

const ADDNEWS = 'NEWS/ADD';

export const addNews = (name, text, imgUrl) => ({
    type: ADDNEWS,
    payload: {
        name,
        text,
        img: imgUrl,
    }
});

const initialState = [...data.write]

function News(state=initialState, action) {
    switch (action.type) {
        case ADDNEWS:
            state.push({
                ...action.payload,
                houre: new Date().getHours(),
                like: 0,
            })
            return state

        default: return state;
    }
}

export default News;