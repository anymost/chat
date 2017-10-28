import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {mapChatList} from '../../selector/main';
import SendMessage from './SendMessage';
import HeadItem from '../../component/main/HeadItem';
import MessageItem from '../../component/chat/MessageItem';
import './chatWrap.css';

class ChatWrap extends React.Component{
    getChildContext() {
        return {
            selectEmoji: this.selectEmoji
        };
    }
    selectEmoji(value) {
        console.log(value);
    }
    setScrollHeight = () => {
        const height = window.getComputedStyle(this.list).height;
        this.container.scrollTo(0, parseInt(height, 10));
    };
    render() {
        const {chatWindow} = this.props;
        return <div className="chat-wrap">
            <HeadItem name={chatWindow.data ? chatWindow.data.name : null}/>
            <div id="pickerContainer"/>
            <div className="main-content-wrap" ref={container => this.container = container}>
                <ul ref={list => this.list = list}>
                    {
                        chatWindow.data &&
                        chatWindow.data.message &&
                        chatWindow.data.message.map((item, index) => {
                            return <MessageItem key={index} message={item}/>;
                        })
                    }
                </ul>
            </div>
            <SendMessage receiver={chatWindow.data.sender}/>
        </div>;
    }
    componentDidMount() {
        this.setScrollHeight();
    }
    componentDidUpdate() {
        this.setScrollHeight();
    }
}

ChatWrap.childContextTypes = {
    selectEmoji: PropTypes.func
};
export default connect(({chatWindow})=>({chatWindow: mapChatList(chatWindow)}))(ChatWrap);