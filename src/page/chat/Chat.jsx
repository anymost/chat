import React from 'react';
import PropTypes from 'prop-types';
import ChatList from '../../containers/chat/ChatList';
import ChatWrap from '../../containers/chat/ChatWrap';
import ImageWrap from '../../component/chat/ImageWrap';
import './chat.css';

class Chat extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isImageShow: false,
            url: ''
        };
    }
    getChildContext() {
        return {
            handleImageShow: this.handleImageShow
        };
    }
    handleImageShow = url => {
        this.setState({
            isImageShow: !this.state.isImageShow,
            url
        });
    };
    render() {
        return <div>
            <ChatList/>
            <ChatWrap />
            <ImageWrap hideImage={this.handleImageShow.bind(this, '')} {...this.state}/>
        </div>;
    }
}

Chat.childContextTypes = {
    handleImageShow: PropTypes.func
};

export default Chat;