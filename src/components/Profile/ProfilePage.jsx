import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './ProfilePage.module.css'
import PostsContainer from "./Posts/PostsContainer";

const ProfilePage = (props) => {
    return (
        <div className={s.ProfilePage}>
            <ProfileInfo {...props} />
            <PostsContainer />
        </div>
    )
}

export default ProfilePage;