import React from "react";
import Message from "./Message/Message";

let Messages = (props) => {
    return (
        <div>
            {props.messages.map(m => <Message message={m.message} direction={m.direction} />)}
        </div>
    )
}

export default Messages;