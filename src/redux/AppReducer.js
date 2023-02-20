import { getAuthUserData } from "./AuthReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
  initialized: false,
}

const AppReducer = (state = initialState, action) => {

  let setInitialized = () => {
    return { ...state, initialized: true }
  }
  switch (action.type) {
    case SET_INITIALIZED:
      return setInitialized();
    default:
      return state;
  }
}

export const setInitialized = () =>
  ({ type: SET_INITIALIZED });

export const initialize = () => async (dispatch) => {
  await dispatch(getAuthUserData())
  dispatch(setInitialized());
}

export default AppReducer;