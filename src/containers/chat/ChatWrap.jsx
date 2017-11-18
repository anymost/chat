import React from 'react';
import {connect} from 'react-redux';
import {mapChatList} from '../../selector/main';
import ContentWrap from '../../containers/main/ContentWrap';
import SendMessage from './SendMessage';
import HeadItem from '../../component/main/HeadItem';
import MessageItem from '../../component/chat/MessageItem';
import './chatWrap.css';

class ChatWrap extends React.Component{
    setScrollHeight = () => {
        const height = window.getComputedStyle(this.list).height;
        this.container.scrollTo(0, parseInt(height, 10));
    };
    render() {
        const {chat} = this.props;
        return <div>
            <HeadItem name={chat.data ? chat.data.name : null}/>
            <div id="pickerContainer"/>
            <div className="chat-content-wrap"
                ref={container => this.container = container}>
                <ul ref={list => this.list = list}>
                    {
                        chat.data &&
                        chat.data.data &&
                        chat.data.data.map((item, index) => {
                            return <MessageItem key={index} message={item}/>;
                        })
                    }
                </ul>
            </div>
            {
                chat.data &&
                chat.data.sender &&
                <SendMessage receiver={chat.data.sender}/>
            }

        </div>;
    }
    componentDidMount() {
        this.setScrollHeight();
    }
    componentDidUpdate() {
        this.setScrollHeight();
    }
}

const ChatContentWrap = ContentWrap(ChatWrap);


export default connect(({chat, chatList}) => ({chat: mapChatList(chat)}))(ChatContentWrap);