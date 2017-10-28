import React from 'react';
import '../../containers/chat/chatWrap.css';

function MessageItem(props) {
    const content = props.message;
    if (content.type === 'sender') {
        return <li className="left-item chat-item">
            <img src={content.avatar} alt="avatar"/>
            <span>{content.message}</span>
        </li>;
    }
    return <li className="right-item chat-item">
        <img src={content.avatar} alt="avatar"/>
        <span>{content.message}</span>
    </li>;
}

export default MessageItem;