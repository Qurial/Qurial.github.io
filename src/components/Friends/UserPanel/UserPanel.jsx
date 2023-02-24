import React from "react";
import userPhoto from '../../../assets/images/user.png'

import { NavLink } from "react-router-dom";
import s from './UserPanel.module.css'

const UserPanel = ({ id, photos, name, status, followed, isFollowingInProgress, follow, unfollow }) => {

	const toggleFollowButtonConstructor = (toggleFollow, text, isFollowingInProgress, id) => {
		return <button
			disabled={isFollowingInProgress.some(userId => userId === id)}
			onClick={() => { toggleFollow(id) }}>{text}</button>
	}

	return (
		<div className={s.userPanel}>
			<NavLink to={`/Profile/${id}`}>
				<img src={photos.small != null
					? photos.small
					: userPhoto}
					className={s.userAvatar}
					alt='user' />
			</NavLink>
			<div>
			<span>{name}</span>
			<p>{status}</p>
			{followed
				? toggleFollowButtonConstructor(unfollow, 'unfollow', isFollowingInProgress, id)
				: toggleFollowButtonConstructor(follow, 'follow', isFollowingInProgress, id)
			}
			</div>
		</div>
	)
}

export default UserPanel