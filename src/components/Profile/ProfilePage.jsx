import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './ProfilePage.module.css'
import PostsContainer from "./Posts/PostsContainer";

const ProfilePage = (props) => {
    return (
        <div className={s.ProfilePage}>
            <img className='BackgroundImage' alt='background' src='https://img.freepik.com/premium-photo/beautiful-morning-panorama-forest-covered-by-low-clouds-autumn-fog-mountain-hills-misty-fall-woodland-colored-sunrise-forested-mountain-slope_270304-233.jpg?w=2000' />

            <ProfileInfo profile={props.profile} />

            <PostsContainer />

        </div>
    )
}

export default ProfilePage;