import React from "react";
import s from './Message.module.css'

const Message = (props) => {
    return (
        <div className={`${s.message} ${props.direction === 'in' ? s.in : s.out}`}>
            {props.message}
        </div>
    )
}

export default Message;