import React from "react";
import s from './NavigationBar.module.css'
import { FaCog } from 'react-icons/fa'
import { FaMusic } from 'react-icons/fa'
import { FaUserFriends } from 'react-icons/fa'
import { FaComment } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { FaNewspaper } from 'react-icons/fa'
import { NavLink } from "react-router-dom";

const NavigationBar = (props) => {
    return (
        <nav className={s.nav}>
            <ul>
                <li>
                    <NavLink to={`/Profile/${props.userID}`} className={navData => navData.isActive ? s.active : s.a}>
                        <FaUser /> Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Messenger' className={navData => navData.isActive ? s.active : s.a}>
                        <FaComment /> Messenger
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Friends' className={navData => navData.isActive ? s.active : s.a}>
                        <FaUserFriends /> Friends
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/News' className={navData => navData.isActive ? s.active : s.a}>
                        <FaNewspaper /> News
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Music' className={navData => navData.isActive ? s.active : s.a}>
                        <FaMusic /> Music
                    </NavLink>
                </li>
                <br></br>
                <li>
                    <NavLink to='/Settings' className={navData => navData.isActive ? s.active : s.a}>
                        <FaCog /> Settings
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationBar;