import React from 'react';
import {connect} from 'react-redux';
import SearchComp from '../../component/main/SearchComp';
import {getUserInfo, liginVerify} from "../../tools/index";
import {chatListStart} from "../../actions/chatList";
import {toString} from "../../tools/index";
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
        const {chatListState, data} = this.props.chatList;
        let array = [];
        if (toString(data) === '[object Array]' && chatListState === 'success'){
            array = data.map(item => {
                return <li>hello</li>
            })
        }
        return <div className="chat-list-wrap">
            <SearchComp/>
            <ul className="chat-list-ul">
                {array}
            </ul>
        </div>;
    }
}

export default connect(({chatList})=>({chatList}), {chatListStart})(ChatList);