import { authAPI, securityAPI } from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const LOG_IN_SERVICE = "LOG_IN_SERVICE";
const LOG_OUT_FROM_SERVICE = "LOG_OUT_FROM_SERVICE";
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";
const CLEAR_CAPTCHA_URL = "CLEAR_CAPTCHA_URL";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    rememberMe: false,
    captchaUrl: null,
};

const AuthReducer = (state = initialState, action) => {

    let setIsFetching = (isFetching) => {
        return { ...state, isFetching }
    }

    let logOutFromService = () => {
        return { ...state, id: null, login: null, email: null }
    }
    switch (action.type) {
        case SET_AUTH_USER_DATA:
        case LOG_IN_SERVICE:
            return { ...state, ...action.data }
        case GET_CAPTCHA_URL_SUCCESS:
            return { ...state, captchaUrl: action.data }
        case SET_IS_FETCHING:
            return setIsFetching(action.isFetching);
        case LOG_OUT_FROM_SERVICE:
            return logOutFromService();
        case CLEAR_CAPTCHA_URL:
            return { ...state, captchaUrl: null }
        default:
            return state;
    }
}


export const setAuthUserData = (id, email, login, isAuth) =>
    ({ type: SET_AUTH_USER_DATA, data: { id, email, login, isAuth } });
export const setIsFetching = (isFetching) =>
    ({ type: SET_IS_FETCHING, isFetching });
export const logInService = (data) =>
    ({ type: LOG_IN_SERVICE, data });
export const logOutFromService = () =>
    ({ type: LOG_OUT_FROM_SERVICE });
export const getCaptchaUrlSuccess = (data) =>
    ({ type: GET_CAPTCHA_URL_SUCCESS, data });
export const clearCaptchaUrl = () =>
    ({ type: CLEAR_CAPTCHA_URL });

export const getAuthUserData = () => (dispatch) => {
    return authAPI.me().then(data => {

        if (data.resultCode === 0) {
            let { id, email, login } = data.data;
            dispatch(setAuthUserData(id, email, login, true))
        }
    })
}

export const postLoginData = (data, setError) => (dispatch) => {
    authAPI.login(data.email, data.password, data.rememberMe, data.captcha).then(response => {
        if (response.resultCode === 0) {
            dispatch(logInService({
                email: data.email,
                password: data.password,
                rememberMe: data.rememberMe,
                captcha: data.captcha
            }))
            dispatch(getAuthUserData())
            dispatch(clearCaptchaUrl())
        } else if (response.resultCode === 10) {
            console.log(response)
            dispatch(getCaptchaUrl())
        } else {
            setError('loginInput', { type: 'server', message: 'Password or email is incorrect' });
        }
    })
}

export const deleteLoginData = () => (dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(logOutFromService())
            dispatch(setAuthUserData(null, null, null, false))
        }
    }).catch(() => {
        alert('unexpected error');
    })
}

export const getCaptchaUrl = () => (dispatch) => {
    securityAPI.getCaptchaUrl()
        .then(data => {
            dispatch(getCaptchaUrlSuccess(data.url))
        })
}

export default AuthReducer;