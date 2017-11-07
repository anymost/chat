import React from 'react';
import Emoji from './Emoji';
import '../../containers/chat/chatWrap.css';

function MessageItem(props) {
    const content = props.message;
    const message = JSON.parse(content.message);
    let messageWrap = null;

    if (message.type === 1) {
        messageWrap = <span className='message-content'>{message.message}</span>;
    } else if (message.type === 2) {
        messageWrap = <span className='message-content'><Emoji emoji={message.message}/></span>;
    }

    if (content.type === 'sender') {
        return <li className="left-item chat-item">
            <img src={content.avatar} alt="avatar"/>
            {messageWrap}
        </li>;
    }
    return <li className="right-item chat-item">
        <img src={content.avatar} alt="avatar"/>
        {messageWrap}
    </li>;
}

export default MessageItem;