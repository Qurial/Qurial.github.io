import { applyMiddleware, combineReducers, compose, createStore } from '@reduxjs/toolkit'
import ProfileReducer from './ProfileReducer';
import MessengerReducer from './MessengerReducer';
import FriendsReducer from './FriendsReducer';
import AuthReducer from './AuthReducer';
import ThunkMiddleware from 'redux-thunk';
import AppReducer from './AppReducer';


const reducers = combineReducers({
    ProfilePage: ProfileReducer,
    MessengerPage: MessengerReducer,
    FriendsPage: FriendsReducer,
    Auth: AuthReducer,
    App : AppReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(ThunkMiddleware)));

window.store = store;

export default store;