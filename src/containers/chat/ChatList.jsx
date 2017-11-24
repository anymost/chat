import React from 'react';
import {connect} from 'react-redux';
import NavList from '../main/NavList';
import {getUserInfo} from '../../tools/index';
import {chatListStart} from '../../actions/chatList';
import {startChat} from '../../actions/chat';
import {timeTransformer} from '../../tools/index';
import './chatList.css';

class ChatList extends React.Component {
    constructor(props) {
        super(props);
        const {id} = getUserInfo();
        this.id = id;
        this.state = {
            defaultIndex: 0
        };

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
    componentWillMount() {
        this.props.chatListStart({id: this.id});
    }


    render() {
        let {chatListState, data: data = []} = this.props.chatList;
        return <ul className='chat-list'>
            {chatListState === 'success' &&
                data.map((item, index) => {
                    return <li key={item.sender}
                        onClick={this.chooseChat.bind(this, index, item)}
                        className={this.state.defaultIndex === index ?
                            'list-item active-list-item' : 'list-item'}>
                        <img src={item.avatar} className="list-avatar" alt="avatar"/>
                        <div>
                            <h3>{item.name}</h3>
                            <p>
                                {
                                    item.message &&
                                    JSON.parse(item.message).message
                                }
                            </p>
                        </div>
                        <span>{timeTransformer(item.date)}</span>
                    </li>;
                })
            }
        </ul>;
    }
}

const ChatListWrap = NavList(ChatList);

export default connect(({chatList}) => ({chatList}), {chatListStart, startChat})(ChatListWrap);