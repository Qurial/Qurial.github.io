import React, { useState } from "react";
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/user.png'
import ProfileStatusHooks from "./ProfileStatus/ProfileStatusHooks";
import EditProfileForm from "./EditProfileForm";

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false)

    if (props.profile == null) {
        return null;
    }

    const asArray = Object.entries(props.profile.contacts);
    const filtered = asArray.filter(([key, value]) => value ? value : null);
    return (
        <div className={s.ProfileInfo}>
            <img src={props.profile.photos.large != null
                ? props.profile.photos.large
                : userPhoto} alt="" />
            <div className={s.Biography}>

                <p className={s.fullName}>{props.profile.fullName}</p>

                <ProfileStatusHooks
                    getStatus={props.getStatus}
                    isOwner={props.isOwner}
                    setStatus={props.setStatus}
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
                {editMode
                    ? <EditProfileForm {...props} setEditMode={setEditMode} />
                    : <>
                        <p>{props.profile.aboutMe}</p>
                        <p>{props.profile.lookingForAJob
                            ? <pre>{props.profile.lookingForAJobDescription}</pre>
                            : null}</p>
                        <ul>
                            {filtered.map(([key, value]) => <li>{value}</li>)}
                        </ul>
                    </>}

                {props.isOwner && <button onClick={() => setEditMode(!editMode)}>{editMode ? 'Cancel' : 'Edit'}</button>}
            </div>

        </div>
    )
}

export default ProfileInfo;