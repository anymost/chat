import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getUserInfo} from '../../tools/index';
import {startSendMessage} from '../../actions/sendMessage';
import ToolBar from './ToolBar';
import Emoji from '../../component/chat/Emoji';
import './sendMessage.css';

class SendMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
        this.sender = getUserInfo().id;
    }
    getChildContext() {
        return {
            selectEmoji: this.selectEmoji
        };
    }
    sendMessage(message) {
        const {startSendMessage,receiver} = this.props;
        startSendMessage({
            sender: this.sender,
            receiver,
            message: message
        });
    }
    selectEmoji = value => {
        const message = JSON.stringify({type: 2, message: value});
        this.sendMessage(message);
    };
    handleInput = (event) => {
        const value = event.target.value;
        this.setState({message: value});
    };

    handleSend = (event) => {
        const {sendMessage} = this.props;
        if (event.keyCode === 13 && sendMessage.state !== 'start') {
            const message = JSON.stringify({type: 1, message: this.state.message});
            this.sendMessage(message);
            this.setState({message: ''});
        }
    };

    render() {
        return <div className="send-wrap">
            <ToolBar/>
            <textarea
                className="input-content"
                onKeyDown={this.handleSend}
                onChange={this.handleInput}
                value={this.state.message}
            />
        </div>;
    }
}
SendMessage.childContextTypes = {
    selectEmoji: PropTypes.func
};

export default connect(({sendMessage})=>({sendMessage}), {startSendMessage})(SendMessage);