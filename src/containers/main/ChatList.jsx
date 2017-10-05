import React from 'react';
import {connect} from 'react-redux';
import SearchComp from '../../component/main/SearchComp';
import {getUserInfo} from "../../tools/index";
import {chatListStart} from "../../actions/chatList";
import {timeTransformer} from "../../tools/index";
import './chatlist.css';

class ChatList  extends React.Component {
    constructor(props) {
        super(props);
        const {id} = getUserInfo();
        this.state = {
            id
        };
        this.props.chatListStart({id});
    }

    render() {
        let  {chatListState, data: data = []} = this.props.chatList;
        let chatList = [];
        if (chatListState === 'success'){
            chatList = data.map(item => {
                return <li className="chat-list-item" key={item.sender}>
                    <img src={item.avatar} className="list-avatar" alt=""/>
                    <div>
                        <h3>{item.name}</h3>
                        <p>{item.data[0].message}</p>
                    </div>
                    <span>{timeTransformer(item.data[0].date)}</span>

                </li>
            })
        }
        return <div className="chat-list-wrap">
            <SearchComp/>
            <ul className="chat-list-ul">
                {chatList}
            </ul>
        </div>;
    }
}

export default connect(({chatList})=>({chatList}), {chatListStart})(ChatList);