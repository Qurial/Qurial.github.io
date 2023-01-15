import React from "react";
import s from './NewMessageField.module.css'

let newMessage = React.createRef();

let sendMessage = () => {
    let text = newMessage.current.value;
    alert(text);
}

const NewMessageField = (props) => {
    return (
        <div className={s.newMessageField}>
            <textarea ref={newMessage}></textarea>
            <button onClick={sendMessage}>Send</button>
        </div>
    )
}

export default NewMessageField;