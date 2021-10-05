import data from '../db/data.json'

const ADDNEWS = 'NEWS/ADD';

export const addNews = ({name, text, imgUrl}) => ({
    type: ADDNEWS,
    payload: {
        name,
        text,
        img: imgUrl,
        day: new Date(),
        like: 0,
    }
});


const initialState = {
    ...data.write,
}

function News(state=initialState, action) {
    switch (action.type) {
        case ADDNEWS:
            return {
                ...state,
                ...action.payload
            }

        default: return state;
    }
}

export default News;