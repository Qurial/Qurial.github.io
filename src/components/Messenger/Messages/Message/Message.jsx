import React from "react";
import s from './Message.module.css'

const Message = (props) => {
    let message = (props.message).replace(/\s\s/ig, '\xa0\x20')
    return (
        <div className={`${s.message} ${props.direction === 'in' ? s.in : s.out}`}>
            <p>{(message).trim()}&nbsp;&nbsp;&nbsp;</p>
        </div>
    )
}

export default Message;