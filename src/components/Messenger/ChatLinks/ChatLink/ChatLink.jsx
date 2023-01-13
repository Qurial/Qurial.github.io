import React from "react";
import { NavLink } from "react-router-dom";
import s from './ChatLink.module.css'

const ChatLink = (props) => {
    return (
        <div className={s.chatLink}>
            <NavLink to={`/Messenger/${props.id}`} className={navData => navData.isActive ? s.active : s.a}>
                <img src={`${props.avatar}`} alt=' '/>
                <span>{props.name}</span>
            </NavLink>
        </div>
    )
}

export default ChatLink;