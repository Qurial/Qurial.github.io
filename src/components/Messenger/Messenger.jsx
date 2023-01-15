import React from "react";
import ChatLinks from "./ChatLinks/ChatLinks";
import s from './Messenger.module.css'
import Messages from "./Messages/Messages";
import NewMessageField from "./Messages/NewMessageField/NewMessageField";

const Messenger = (props) => {
    return (
        <div className={s.messenger}>
            <div className={`${s.column} ${s.dialogsList}`}>

                <ChatLinks dialogs={props.MessengerPage.dialogs} />

            </div>
            <div className={`${s.column} ${s.dialog}`}>

                <Messages messages={props.MessengerPage.messages} />
                <NewMessageField />
                
            </div>
        </div>
    )
}

export default Messenger;