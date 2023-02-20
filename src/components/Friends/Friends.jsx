import React from "react";
import s from './Friends.module.css';
import userPhoto from '../../assets/images/user.png'
import { NavLink } from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";

const Friends = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={s.Friends}>

            {props.isFetching
                ? <Preloader />
                : null}
            {pages
                .map(p => {
                    if ((Math.abs(p - props.currentPage) < 5)) {
                        return <div
                            key={p}
                            className={`${(props.currentPage === p) && s.selected} ${s.pageSelector}`}
                            onClick={(e) => props.onPageChange(p)}>{p}</div>
                    } else if ((Math.abs(p - props.currentPage) === 5)) {
                        return <div
                            key={p}
                            className={s.dots}>{'...'}</div>
                    } else if (p === pagesCount || p === 1) {
                        return <div
                            key={p}
                            className={s.pageSelector}
                            onClick={(e) => props.onPageChange(p)}>{p}</div>
                    } return null;
                }
                )}

            {props.friends.map(u => <div key={u.id}>
                <NavLink to={`/Profile/${u.id}`}>
                    <img src={u.photos.small != null
                        ? u.photos.small
                        : userPhoto} className={s.userAvatar}
                        alt='user' />
                </NavLink>
                <span>{u.name}</span>
                <p>{u.status}</p>
                {u.followed
                    ? <button
                        disabled={props.isFollowingInProgress.some(id => id === u.id)}
                        onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                    : <button
                        disabled={props.isFollowingInProgress.some(id => id === u.id)}
                        onClick={() => { props.follow(u.id) }}>follow</button>}
            </div>)}
        </div>
    )
}
export default Friends;