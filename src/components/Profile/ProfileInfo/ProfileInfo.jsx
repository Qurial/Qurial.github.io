import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.ProfileInfo}>
            <img src='https://i.pinimg.com/originals/39/e9/b3/39e9b39628e745a39f900dc14ee4d9a7.jpg' />
            <div className={s.Biography}>
                <p>Name: Andrew</p>
                <p>Surname: Mikhalkov</p>
                <p>Birthday: 1993</p>
            </div>
        </div>
    )
}

export default ProfileInfo;