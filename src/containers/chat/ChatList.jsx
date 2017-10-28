import React from 'react';
import {connect} from 'react-redux';
import SearchComp from '../../component/main/SearchComp';
import {getUserInfo} from '../../tools/index';
import {chatListStart} from '../../actions/chatList';
import {showChatWindow} from '../../actions/chatWindow';
import {timeTransformer} from '../../tools/index';
import './chatlist.css';

class ChatList extends React.Component {
    constructor(props) {
        super(props);
        const {id} = getUserInfo();
        this.state = {
            id,
            defaultIndex: 0
        };
        this.props.chatListStart({id});
    }

    chooseChat = (index, item) => {
        this.setState({
            defaultIndex: index
        });
        this.props.showChatWindow(item);

    };

    componentDidMount() {
        const {chatList: {data}} = this.props;
        if (data && data.length > 0) {
            this.props.showChatWindow(data[0]);
        }
    }

    render() {
        let {chatListState, data: data = []} = this.props.chatList;
        return <div className="chat-list-wrap">
            <SearchComp/>
            <ul className="chat-list-ul">
                {chatListState === 'success' &&
                data.map((item, index) => {
                    return <li onClick={this.chooseChat.bind(this, index, item)} key={item.sender}
                        className={this.state.defaultIndex === index ?
                            'chat-list-item active-list-item' : 'chat-list-item'}>
                        <img src={item.avatar} className="list-avatar" alt="avatar"/>
                        <div>
                            <h3>{item.name}</h3>
                            <p>{item.data[0].message}</p>
                        </div>
                        <span>{timeTransformer(item.data[0].date)}</span>
                    </li>;
                })
                }
            </ul>
        </div>;
    }
}

export default connect(({chatList}) => ({chatList}), {chatListStart, showChatWindow})(ChatList);