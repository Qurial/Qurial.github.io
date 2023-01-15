import React from "react";
import s from './Post.module.css'
import { FaHeart } from 'react-icons/fa'

const Post = (props) => {
    return (
        <div className={s.Post}>
            <img src={props.Image} alt='avatar' />
            <p className={s.ProfileName}>{props.Name}</p>
            <pre className={s.PostText}>{props.Text}</pre>
            <button><FaHeart /></button><span>{props.Likes}</span>
        </div>
    )
}

export default Post;