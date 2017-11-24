import React from 'react';
import {connect} from 'react-redux';
import NavList from '../main/NavList';
import ChatListItem from './ChatListItem';
import {Popconfirm} from 'antd';
import {getUserInfo} from '../../tools/index';
import {chatListStart} from '../../actions/chatList';
import {startChat} from '../../actions/chat';
import './chatList.css';

class ChatList extends React.Component {
    constructor(props) {
        super(props);
        const {id} = getUserInfo();
        this.id = id;
        this.state = {
            defaultIndex: 0
        };
        this.props.chatListStart({id: this.id});

    }

    chooseChat = (index, item) => {
        this.setState({
            defaultIndex: index
        });
        this.props.startChat({
            id: this.id,
            sender: item.sender
        });

    };

    rightKeyClick = (index, item) => {

    };

    render() {
        let {chatListState, data: data = []} = this.props.chatList;
        return <ul className='chat-list'>
            {chatListState === 'success' &&
                data.map((item, index) => {
                    return <li key={item.sender}
                        onClick={this.chooseChat.bind(this, index, item)}
                        onContextMenu={this.rightKeyClick.bind(this, index, item)}
                        className={this.state.defaultIndex === index ?
                            'list-item active-list-item' : 'list-item'}>
                        <Popconfirm title={'确定要删除该聊天吗?'} onConfirm={this.}>
                            <ChatListItem {...item}/>
                        </Popconfirm>
                    </li>;
                })
            }
        </ul>;
    }
}

const ChatListWrap = NavList(ChatList);

export default connect(({chatList}) => ({chatList}), {chatListStart, startChat})(ChatListWrap);