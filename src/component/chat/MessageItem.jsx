import React from 'react';
import Emoji from './Emoji';
import PropTypes from 'prop-types';
import '../../containers/chat/chatWrap.css';

class MessageItem extends React.Component{
    handleImageShow = (message) => {
        this.context.handleImageShow(message);
    };
    render() {
        const content = this.props.message;
        if (content.message === 'empty message'){
            return null;
        }
        const message = JSON.parse(content.message);
        let messageWrap = null;
        if (message.type === 1) {
            messageWrap = <span className='message-content'>{message.message}</span>;
        } else if (message.type === 2) {
            messageWrap = <span className='message-content'><Emoji emoji={message.message}/></span>;
        } else if (message.type === 3) {
            messageWrap = <img
                onClick={this.handleImageShow.bind(this, message.message)}
                className='chat-img'
                src={message.message} alt="img"
            />;
        }

        if (content.messageType === 'receive') {
            return <li className="left-item chat-item">
                <img src={content.avatar} alt="avatar"/>
                {messageWrap}
            </li>;
        }
        return <li className="right-item chat-item">
            <img src={content.avatar} alt="avatar"/>
            {messageWrap}
        </li>;
    }
}

MessageItem.contextTypes = {
    message: PropTypes.object,
    handleImageShow: PropTypes.func
};


export default MessageItem;