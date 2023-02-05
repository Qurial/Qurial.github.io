import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_IS_FOLLOWING_IN_PROGRESS = 'SET_IS_FOLLOWING_IN_PROGRESS';

let initialState = {
    friends: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: [],
};

const FriendsReducer = (state = initialState, action) => {

    let follow = (userID) => {
        return {
            ...state,
            friends: state.friends.map(u => {

                if (userID === u.id) {
                    return {
                        ...u,
                        followed: false,
                    }
                }
                return u;
            })
        }
    }
    let unfollow = (userID) => {
        return {
            ...state,
            friends: state.friends.map(u => {
                if (userID === u.id) {
                    return {
                        ...u,
                        followed: true,
                    }
                }
                return u;
            })
        }
    }
    let setUsers = (users) => {
        return { ...state, friends: [...users], }
    }

    let setCurrentPage = (currentPage) => {
        return { ...state, currentPage: currentPage }
    }

    let setTotalUsersCount = (usersCount) => {
        return { ...state, totalUsersCount: usersCount }
    }
    let setIsFetching = (isFetching) => {
        return { ...state, isFetching: isFetching }
    }
    let setIsFollowingInProgress = (userID) => {
        return {
            ...state,
            isFollowingInProgress:
                state.isFollowingInProgress.some(id => id === userID)
                    ? state.isFollowingInProgress.filter(id => id !== userID)
                    : [...state.isFollowingInProgress, userID]
        }
    }

    switch (action.type) {
        case FOLLOW:
            return follow(action.userID);
        case UNFOLLOW:
            return unfollow(action.userID);
        case SET_USERS:
            return setUsers(action.users);
        case SET_CURRENT_PAGE:
            return setCurrentPage(action.currentPage);
        case SET_TOTAL_USERS_COUNT:
            return setTotalUsersCount(action.usersCount);
        case SET_IS_FETCHING:
            return setIsFetching(action.isFetching);
        case SET_IS_FOLLOWING_IN_PROGRESS:
            return setIsFollowingInProgress(action.userID);
        default:
            return state;
    }
}

export const followAC = (userID) =>
    ({ type: FOLLOW, userID });
export const unfollowAC = (userID) =>
    ({ type: UNFOLLOW, userID });
export const setUsers = (users) =>
    ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) =>
    ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (usersCount) =>
    ({ type: SET_TOTAL_USERS_COUNT, usersCount });
export const setIsFetching = (isFetching) =>
    ({ type: SET_IS_FETCHING, isFetching });
export const setIsFollowingInProgress = (userID) =>
    ({ type: SET_IS_FOLLOWING_IN_PROGRESS, userID });


export const getUsers = (pageSize, pageNumber) => {
    return (dispatch) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(setIsFetching(true));
        usersAPI.getUsers(pageSize, pageNumber)
            .then(data => {
                dispatch(setIsFetching(false));
                dispatch(setTotalUsersCount(data.totalCount));
                dispatch(setUsers(data.items));
            })
    }
}

export const unfollow = (userID) => {
    return (dispatch) => {
        dispatch(setIsFollowingInProgress(userID));
        usersAPI.unfollow(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followAC(userID));
                    dispatch(setIsFollowingInProgress(userID));
                }
            })
    }
}

export const follow = (userID) => {
    return (dispatch) => {
        dispatch(setIsFollowingInProgress(userID));
        usersAPI.follow(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowAC(userID));
                    dispatch(setIsFollowingInProgress(userID));
                }
            })
    }
}





export default FriendsReducer;