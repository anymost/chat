import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getUserInfo} from '../../tools/index';
import {startSendMessage} from '../../actions/sendMessage';
import ToolBar from './ToolBar';
import Emoji from './Emoji';
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
    selectEmoji = value => {
        const newMessage = <div>{this.state.message}<Emoji emoji={value}/></div>;
        this.setState({message: newMessage});
    };
    handleInput = (event) => {
        const value = event.target.value;
        this.setState({message: `${this.state.message}${value}`});
    };

    handleSend = (event) => {
        const {sendMessage, startSendMessage,receiver} = this.props;
        if (event.keyCode === 13 && sendMessage.state !== 'start') {
            startSendMessage({
                sender: this.sender,
                receiver,
                message: this.state.message
            });
            this.setState({message: ''});
        }
    };

    render() {
        return <div className="send-wrap">
            <ToolBar/>
            <div ref={container => this.container = container}
                className="input-content" onKeyDown={this.handleSend}
                onChange={this.handleInput} contentEditable={true}
                dangerouslySetInnerHTML={{__html: this.state.message}}
            />
        </div>;
    }
}
SendMessage.childContextTypes = {
    selectEmoji: PropTypes.func
};

export default connect(({sendMessage})=>({sendMessage}), {startSendMessage})(SendMessage);