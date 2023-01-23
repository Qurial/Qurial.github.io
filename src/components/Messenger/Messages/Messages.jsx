import React from "react";
import Message from "./Message/Message";
import s from './Messages.module.css'

let Messages = (props) => {
    return (
        <div className={s.messages}>
            {props.messages
                .map(m => <Message message={m.message} direction={m.direction} key={m.id}/>)}
        </div>
    )
}

export default Messages;