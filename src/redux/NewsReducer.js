import { newsAPI } from "../api/api";

const SET_NEWS = 'SET_NEWS';

let initialState = {
    news: null,
}

const NewsReducer = (state = initialState, action) => {

    let setNews = (news) => {
        return { ...state, news }
    }
    switch (action.type) {
        case SET_NEWS:
            return setNews(action.news);
        default:
            return state;
    }
}

export const setNews = (news) =>
    ({ type: SET_NEWS, news });

export const getNews = () => async (dispatch) => {
    let data = await newsAPI.getNews();
    console.log(data)
    dispatch(setNews(data));
}

export default NewsReducer;