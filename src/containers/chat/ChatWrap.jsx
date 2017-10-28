import React from 'react';
import {connect} from 'react-redux';
import {mapChatList} from '../../selector/main';
import SendMessage from './SendMessage';
import HeadItem from '../../component/main/HeadItem';
import './chatWrap.css';

class ChatWrap extends React.Component{
    chatList(chatWindow) {
        if (chatWindow.data) {
            const message = chatWindow.data.message;
            return message.map((item, index) => {
                if (item.type === 'sender') {
                    return <li key={index} className="left-item chat-item">
                        <img src={item.avatar} alt="avatar"/>
                        <span>{item.message}</span>
                    </li>;
                }
                return <li key={index} className="right-item chat-item">
                    <img src={item.avatar} alt="avatar"/>
                    <span>{item.message}</span>
                </li>;

            });
        }
        return null;
    }
    render() {
        const {chatWindow} = this.props;
        return <div className="chat-wrap">
            <HeadItem name={chatWindow.data ? chatWindow.data.name : null}/>
            <div className="main-content-wrap">
                <ul>{this.chatList(chatWindow)}</ul>
            </div>
            <SendMessage receiver={chatWindow.data.sender}/>
        </div>;
    }
}

export default connect(({chatWindow})=>({chatWindow: mapChatList(chatWindow)}))(ChatWrap);