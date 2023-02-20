import { profileAPI } from "../api/api";
import user from '../assets/images/user.png'
const SET_PROFILE_IMAGE = 'SET_PROFILE_IMAGE';

let initialState = {
    profilePhoto: null
};

const SettingsReducer = (state = initialState, action) => {

    let setProfileImage = (profilePhoto) => {
        return { ...state, profilePhoto }
    }

    switch (action.type) {
        case SET_PROFILE_IMAGE:
            return setProfileImage(action.profilePhoto);
        default:
            return state;
    }
}
export const setProfileImage = (profilePhoto) =>
    ({ type: SET_PROFILE_IMAGE, profilePhoto });

export const updateProfileImage = (photo) => {
    return (dispatch) => {
        profileAPI.setProfileImage(photo)
            .then(() => {
                dispatch(setProfileImage(photo));
            })
            .catch(err => {
                console.log(err);
            })
    }
}


export default SettingsReducer;