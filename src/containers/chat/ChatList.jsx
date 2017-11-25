import React from 'react';
import {connect} from 'react-redux';
import NavList from '../main/NavList';
import ChatListItem from './ChatListItem';
import {Popconfirm} from 'antd';
import {getUserInfo} from '../../tools/index';
import {chatListStart} from '../../actions/chatList';
import {startChat} from '../../actions/chat';
import {deleteChatList} from '../../actions/deleteChat';
import './chatList.css';

class ChatList extends React.Component {
    constructor(props) {
        super(props);
        const {id} = getUserInfo();
        this.id = id;
        this.currentSender = 0;
        this.state = {
            defaultIndex: 0
        };
        this.props.chatListStart({id: this.id});
    }

    chooseChat = (index, item, event) => {
        event.stopPropagation();
        this.setState({
            defaultIndex: index
        });
        this.props.startChat({
            id: this.id,
            sender: item.sender
        });

    };

    rightKeyClick = (event) => {
        event.preventDefault();
        event.currentTarget.click();
    };

    bindCurrentSender = (item) => {
        this.currentSender = item.sender;
    };

    deleteChat = () => {
        this.props.deleteChatList({
            id: this.id,
            sender: this.currentSender
        });
    };

    render() {
        let {chatListState, data: data = []} = this.props.chatList;
        return <Popconfirm  trigger='click' title='确认删除该聊天?' placement='top'
            onConfirm={this.deleteChat}>
            <ul className='chat-list'
                onContextMenu={this.rightKeyClick.bind(this)}>
                {chatListState === 'success' &&
                data.map((item, index) => {
                    return<li key={item.sender}
                        onClick={this.chooseChat.bind(this, index, item)}
                        onContextMenu={this.bindCurrentSender.bind(this, item)}
                        className={this.state.defaultIndex === index ?
                            'list-item active-list-item' : 'list-item'}>
                        <ChatListItem {...item}/>
                    </li>;
                })
                }
            </ul>
        </Popconfirm>;
    }
}

const ChatListWrap = NavList(ChatList);

export default connect(({chatList}) => ({chatList}), {chatListStart, startChat, deleteChatList})(ChatListWrap);