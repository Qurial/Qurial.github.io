import React from "react";
import { addPost } from "../../../../redux/state";
import s from './NewPostField.module.css'


const NewPostField = (props) => {


    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div className={s.NewPostField}>
            <textarea ref={newPostElement}></textarea>
            <button onClick={addPost}>Post</button>
        </div>
    )
}

export default NewPostField;