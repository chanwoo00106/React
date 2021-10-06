import data from '../db/data.json'
import produce from 'immer';

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


const initialState = {...data}

function News(state=initialState, action) {
    switch (action.type) {
        case ADDNEWS:
            return produce(state, draft => {
                draft.write.push({
                    ...action.payload,
                    day: String(new Date()),
                    like: 0,
                });
            });
        
        case LIKE:
            return produce(state, draft => {
                draft.write[draft.write.findIndex(action.id)].like += 1;
            });

        case TOGGLE:
            return produce(state, draft => {
                draft.toggle = !draft.toggle;
            })
        default: return state;
    }
}

export default News;