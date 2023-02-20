import React from "react";
import { connect } from "react-redux";
import { addPost } from "../../../redux/ProfileReducer";
import Posts from './Posts'

class PostsContainer extends React.Component {
    render = () => {
        return <Posts {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        newPostText: state.ProfilePage.newPostText,
        posts: state.ProfilePage.postData,
    }
}

export default connect(mapStateToProps, { addPost })(PostsContainer);