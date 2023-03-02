import { newsAPI } from "../api/api";

const SET_NEWS = 'SET_NEWS';
const SET_SEARCH_SAFETY_MODE = 'SET_SEARCH_SAFETY_MODE';

let initialState = {
    news: null,
    searchSafetyMode: false,
}

const NewsReducer = (state = initialState, action) => {

    let setNews = (news) => {
        return { ...state, news }
    }

    let setSearchSafetyMode = (searchSafetyMode) => {
        return {...state, searchSafetyMode}
    }
    switch (action.type) {
        case SET_NEWS:
            return setNews(action.news);
        case SET_SEARCH_SAFETY_MODE:
            return setSearchSafetyMode(action.searchSafetyMode);
        default:
            return state;
    }
}

export const setNews = (news) =>
    ({ type: SET_NEWS, news });
export const setSearchSafetyMode = (searchSafetyMode) =>
    ({ type: SET_SEARCH_SAFETY_MODE, searchSafetyMode });

export const getNews = (request) => (dispatch) => {
    newsAPI.getNews(request)
        .then(news => {
            dispatch(setNews(news));
        })
}

export default NewsReducer;