import React from "react";
import Messages from "../Messages";
import s from './NewMessageField.module.css'

const NewMessageField = (props) => {
    let newMessage = React.createRef();

    let onSendMessage = () => {
        props.sendMessage();
    }

    let onMessageFieldChange = () => {
        let text = newMessage.current.value;
        props.updateNewMessageText(text);
    }
    return (
        <div className={`${s.column} ${s.dialog}`}>
            <Messages messages={props.store.getState().MessengerPage.messages}/>
            <div className={s.newMessageField}>
                <textarea
                    ref={newMessage}
                    onChange={onMessageFieldChange}
                    value={props.newMessageText} />
                <button onClick={onSendMessage}>Send</button>
            </div>
        </div>
    )
}

export default NewMessageField;