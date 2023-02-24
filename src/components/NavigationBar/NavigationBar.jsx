import React from "react";
import s from './NavigationBar.module.css'
import { FaCog } from 'react-icons/fa'
// import { FaMusic } from 'react-icons/fa'
import { FaUserFriends } from 'react-icons/fa'
import { FaComment } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
// import { FaNewspaper } from 'react-icons/fa'
import { NavLink } from "react-router-dom";

const NavigationBar = (props) => {

    const linkElementConstructor = (link, linkName, icon) => {
        return (
            <li>
                <NavLink to={link} className={navData => navData.isActive ? s.active : s.a}>
                    {icon} <span>{linkName}</span>
                </NavLink>
            </li>
        )
    }

    return (
        <nav className={s.nav}>
            <ul>
                {linkElementConstructor(`/Profile/${props.userID}`, 'Profile', <FaUser />)}
                {linkElementConstructor('/Messenger', 'Messenger', <FaComment />)}
                {linkElementConstructor('/Friends', 'Friends', <FaUserFriends />)}
                {/* {linkElementConstructor('/News', 'News', <FaNewspaper />)} */}
                {/* {linkElementConstructor('/Music', 'Music', <FaMusic />)} */}
                <br></br>
                {linkElementConstructor('/Settings', 'Settings', <FaCog />)}
            </ul>
        </nav>
    )
}

export default NavigationBar;