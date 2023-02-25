import { profileAPI } from "../api/api";
import user from '../assets/images/user.png'
const SET_PROFILE_PAGE = 'SET_PROFILE_PAGE';
const SET_STATUS = 'SET_STATUS';
const ADD_POST = 'ADD_POST';
const SET_IS_OWNER = 'SET_IS_OWNER';

let initialState = {
	postData: [
		{
			image: 'https://t4.ftcdn.net/jpg/01/29/43/85/360_F_129438556_1ugKA7Fk1EiR7uar9ZGaQ3wYfaWSM25E.jpg',
			name: 'Maria',
			text: "Hi! Usually nothing, it's not a real social network, and we are not even real people",
			likes: "6",
			id: 2,
		},
		{
			image: 'https://i.pinimg.com/originals/39/e9/b3/39e9b39628e745a39f900dc14ee4d9a7.jpg',
			name: 'Andrew',
			text: "Hi! I am new here, what are you usually doing here?",
			likes: "2",
			id: 3,
		},
	],
	newPostText: '',
	status: '',
	profile: null,
	isOwner: false,
};

const ProfileReducer = (state = initialState, action) => {

	let addPost = (postText) => {
		return {
			...state,
			newPostText: '',
			postData: [{
				image: state.profile.photos.small ? state.profile.photos.small : user,
				name: state.profile.fullName,
				text: postText,
				likes: "0",
			},
			...state.postData]
		}
	}

	let setProfilePage = (profile) => {
		return { ...state, profile: {...state.profile, ...profile} }
	}

	let setStatus = (status) => {
		return { ...state, status }
	}

	let setIsOwner = (isOwner) => {
		return { ...state, isOwner }
	}

	switch (action.type) {
		case ADD_POST:
			return addPost(action.postText);
		case SET_PROFILE_PAGE:
			return setProfilePage(action.profile);
		case SET_STATUS:
			return setStatus(action.status);
		case SET_IS_OWNER:
			return setIsOwner(action.isOwner);
		default:
			return state;
	}
}

export const addPost = (postText) =>
	({ type: ADD_POST, postText });
export const setProfilePage = (profile) =>
	({ type: SET_PROFILE_PAGE, profile });
export const setStatus = (status) =>
	({ type: SET_STATUS, status });
export const setIsOwner = (isOwner) =>
	({ type: SET_IS_OWNER, isOwner });

export const getUserProfile = (userID) => {

	return (dispatch) => {
		profileAPI.getUserProfile(userID)
			.then(data => {
				dispatch(setProfilePage(data));
			})
			.catch(err => {
				console.log(err);
			})
	}
}

export const updateUserProfile = (profile) => {
	return (dispatch) => {
		profileAPI.updateUserProfile(profile)
			.then(data => {
				dispatch(setProfilePage(profile));
			})
			.catch(err => {
				console.log(err);
			})
	}
}

export const getStatus = (userID) => {

	return (dispatch) => {
		profileAPI.getStatus(userID)
			.then(data => {
				dispatch(setStatus(data));
			})
			.catch(err => {
				console.log(err);
			})
	}
}

export const updateStatus = (status) => {
	return (dispatch) => {
		profileAPI.setStatus(status)
			.then(() => {
				dispatch(setStatus(status));
			})
			.catch(err => {
				console.log(err);
			})
	}
}

export default ProfileReducer;