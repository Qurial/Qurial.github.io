import React from "react";
import ChatLinks from "./ChatLinks/ChatLinks";
import s from './Messenger.module.css'
import NewMessageFieldContainer from "./Messages/NewMessageField/NewMessageFieldContainer";

const Messenger = (props) => {
    return (
        <div className={s.messenger}>
            <div className={`${s.column} ${s.dialogsList}`}>
                <ChatLinks dialogs={props.dialogs} />
            </div>
            <NewMessageFieldContainer className={`${s.column} ${s.dialog}`} />
        </div>
    )
}

export default Messenger;