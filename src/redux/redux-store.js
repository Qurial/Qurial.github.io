import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit'
import ProfileReducer from './ProfileReducer';
import MessengerReducer from './MessengerReducer';
import FriendsReducer from './FriendsReducer';


const reducers = combineReducers({
    ProfilePage: ProfileReducer,
    MessengerPage: MessengerReducer,
    FriendsPage: FriendsReducer,
})
const store = createStore(reducers)

export default store;