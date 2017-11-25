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
        const message = JSON.parse(content.message);
        if (message.type === 0) {
            return null;
        }
        let messageWrap = null;
        switch(message.type) {
        case 0:
            messageWrap = null;
            break;
        case 1:
            messageWrap = <span className='message-content'>{message.message}</span>;
            break;
        case 2:
            messageWrap = <span className='message-content'>
                <Emoji emoji={message.message}/>
            </span>;
            break;
        case 3:
            messageWrap = <img className='chat-img'
                onClick={this.handleImageShow.bind(this, message.message)}
                src={message.message} alt="img"
            />;
            break;
        default:
            messageWrap = null;
            break;
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