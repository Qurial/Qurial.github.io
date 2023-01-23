import { connect } from "react-redux";
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../redux/FriendsReducer";
import Friends from './Friends'

let mapStateToProps = (state) => {
    return {
        friends: state.FriendsPage.friends
    }
}

let mapDispatchToProps = (dispatch) => {
        return {
            follow: (userID) => {
                dispatch(followActionCreator(userID));
            },
            unfollow: (userID) => {
                dispatch(unfollowActionCreator(userID));
            },
            setUsers: (users) => {
                dispatch(setUsersActionCreator(users));
            }
        }
}
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);


export default FriendsContainer;