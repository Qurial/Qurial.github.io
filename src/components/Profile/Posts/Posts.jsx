import React from "react";
import Post from "./Post/Post";
import s from './Posts.module.css'

const Posts = (props) => {
    let newPostElement = React.createRef();
    let postsElem = (postData) => postData
        .map(post => <Post
            Image={post.image}
            Name={post.name}
            Text={post.text}
            Likes={post.likes}
            key={post.id}
        />)

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div className={s.Posts}>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
                <button onClick={onAddPost}>Post</button>
            </div>

            {postsElem(props.posts)}
        </div>
    )
}

export default Posts;