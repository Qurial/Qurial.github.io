import { newsAPI } from "../api/api";

const SET_NEWS = 'SET_NEWS';

let initialState = {
    news: null,
    webSearchNews: null,
}

const NewsReducer = (state = initialState, action) => {

    let setNews = (news, webSearchNews) => {
        return { ...state, news, webSearchNews }
    }
    switch (action.type) {
        case SET_NEWS:
            return setNews(action.news, action.webSearchNews);
        default:
            return state;
    }
}

export const setNews = (news, webSearchNews) =>
    ({ type: SET_NEWS, news, webSearchNews });

export const getNews = (request) => (dispatch) => {
    //let news = await newsAPI.getNews();
    newsAPI.getWebSearchNews(request)
        .then(webSearchNews => {
            let news = null
            console.log(webSearchNews)
            dispatch(setNews(news, webSearchNews));
        })
}

export default NewsReducer;