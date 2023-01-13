import React from "react";
import ChatLink from "./ChatLink/ChatLink";

let ChatLinks = (props) => {
    return (
        <div>
            {props.dialogs
                .map(d => <ChatLink name={d.name} id={d.id} avatar={d.avatar} />)}
        </div>
    )
}


export default ChatLinks;