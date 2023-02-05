import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit'
import ProfileReducer from './ProfileReducer';
import MessengerReducer from './MessengerReducer';
import FriendsReducer from './FriendsReducer';
import AuthReducer from './AuthReducer';
import ThunkMiddleware from 'redux-thunk';


const reducers = combineReducers({
    ProfilePage: ProfileReducer,
    MessengerPage: MessengerReducer,
    FriendsPage: FriendsReducer,
    Auth: AuthReducer,
})
const store = createStore(reducers, applyMiddleware(ThunkMiddleware))

export default store;