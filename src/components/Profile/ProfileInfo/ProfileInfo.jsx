import React from "react";
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/user.png'
import ProfileStatusContainer from "./ProfileStatus/ProfileStatusContainer";

const ProfileInfo = (props) => {
    if(props.profile == null) {
        return null;
    }
    let contacts = props.profile.contacts
    return (
        <div className={s.ProfileInfo}>
            <img src={props.profile.photos.large != null
                ? props.profile.photos.large
                : userPhoto} alt="" />
            <div className={s.Biography}>
                <p>{props.profile.fullName}</p>
                <p>{props.profile.aboutMe}</p>
                <ProfileStatusContainer />
                <ul>
                    {contacts.facebook ? <li>{contacts.facebook}</li> : null}
                    {contacts.website ? <li>{contacts.website}</li> : null}
                    {contacts.vk ? <li>{contacts.vk}</li> : null}
                    {contacts.twitter ? <li>{contacts.twitter}</li> : null}
                    {contacts.instagram ? <li>{contacts.instagram}</li> : null}
                    {contacts.youtube ? <li>{contacts.youtube}</li> : null}
                    {contacts.github ? <li>{contacts.github}</li> : null}
                    {contacts.mainLink ? <li>{contacts.mainLink}</li> : null}
                </ul>
            </div>
        </div>
    )
}

export default ProfileInfo;