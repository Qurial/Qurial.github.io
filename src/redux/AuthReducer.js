import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const LOG_IN_SERVICE = "LOG_IN_SERVICE";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    password: null,
    rememberMe: false,
};

const AuthReducer = (state = initialState, action) => {

    let setAuthUserData = (data) => {
        return { ...state, ...data, isAuth: true }
    }
    let setIsFetching = (isFetching) => {
        return { ...state, isFetching }
    }
    let LogInService = (data) => {
        return { ...state, ...data }
    }
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return setAuthUserData(action.data);
        case SET_IS_FETCHING:
            return setIsFetching(action.isFetching);
        case LOG_IN_SERVICE:
            return LogInService(action.data);
        default:
            return state;
    }
}


export const setAuthUserData = (id, email, login) =>
    ({ type: SET_AUTH_USER_DATA, data: { id, email, login } });
export const setIsFetching = (isFetching) =>
    ({ type: SET_IS_FETCHING, isFetching });
export const LogInService = (data) =>
    ({ type: SET_IS_FETCHING, data });

export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then(data => {

        if (data.resultCode === 0) {
            let { id, email, login } = data.data;
            dispatch(setAuthUserData(id, email, login))
        }
    })
}

export const postLoginData = (data) => (dispatch) => {
    authAPI.login(data.email, data.password).then(data => {
        if (data.resultCode === 0) {
            dispatch(LogInService({ email: data.email, password: data.password }))
        }
    }).catch(() => {
        alert('email or password is incorrect');
    })

}

export default AuthReducer;