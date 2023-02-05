import React from "react";
import { connect } from "react-redux";
import { addPost, updateNewPostText } from "../../../redux/ProfileReducer";
import Posts from './Posts'

class PostsContainer extends React.Component {

    componentDidMount() {
        this.onPageChange();
    }

    onPageChange = () => {           
    }

    render = () => {
        return <Posts {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    
    return {
        newPostText: state.ProfilePage.newPostText,
        posts: state.ProfilePage.postData,
    }
}

export default connect(mapStateToProps, { addPost, updateNewPostText, })(PostsContainer);