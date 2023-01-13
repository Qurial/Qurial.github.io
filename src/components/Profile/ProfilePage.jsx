import React from "react";
import Post from "./Posts/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './ProfilePage.module.css'

let postsElem = (postData) => postData
    .map(post => <Post
        Image={post.image}
        Name={post.name}
        Text={post.text}
        Likes={post.likes}
    />)

const ProfilePage = (props) => {
    return (
        <div className={s.ProfilePage}>
            <img className='BackgroundImage' alt='background' src='https://img.freepik.com/premium-photo/beautiful-morning-panorama-forest-covered-by-low-clouds-autumn-fog-mountain-hills-misty-fall-woodland-colored-sunrise-forested-mountain-slope_270304-233.jpg?w=2000' />

            <ProfileInfo />
            {postsElem(props.ProfilePage.postData)}
        </div>
    )
}

export default ProfilePage;