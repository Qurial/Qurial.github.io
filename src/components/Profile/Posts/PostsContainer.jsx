import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/ProfileReducer";
import Posts from './Posts'

let mapStateToProps = (state) => {
    return {
        newPostText: state.ProfilePage.newPostText,
        posts: state.ProfilePage.postData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
    }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);


export default PostsContainer;