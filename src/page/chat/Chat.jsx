import React from 'react';
import ChatList from '../../containers/main/ChatList';
import './chat.css';

class Chat extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <ChatList/>
        </div>;
    }
}

export default Chat;