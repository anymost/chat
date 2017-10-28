import React from 'react';
import ChatList from '../../containers/chat/ChatList';
import ChatWrap from '../../containers/chat/ChatWrap';
import './chat.css';

function Chat() {
    return <div>
        <ChatList/>
        <ChatWrap/>
    </div>
}

export default Chat;