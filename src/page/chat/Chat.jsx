import React from 'react';
import ChatList from '../../containers/main/ChatList';
import ChatWrap from '../../containers/main/ChatWrap';
import './chat.css';

class Chat extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <ChatList/>
            <ChatWrap/>
        </div>;
    }
}

export default Chat;