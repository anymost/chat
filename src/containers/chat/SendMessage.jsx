import React from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from '../../tools/index';
import {startSendMessage} from '../../actions/sendMessage';
import ToolBar from './ToolBar';
import './sendMessage.css';

class SendMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
        this.sender = getUserInfo().id;
    }

    handleInput = (event) => {
        this.setState({message: event.target.value});
    };

    handleSend = (event) => {
        const {sendMessage, startSendMessage,receiver} = this.props;
        if (event.keyCode === 13 && sendMessage.state !== 'start') {
            startSendMessage({
                sender: this.sender,
                receiver,
                message: this.state.message
            });
        }
    };

    render() {
        return <div className="send-wrap">
            <ToolBar/>
            <textarea className="input-content" value={this.state.message}
            onChange={this.handleInput} onKeyDown={this.handleSend}
            />
        </div>;
    }
}

export default connect(({sendMessage})=>({sendMessage}), {startSendMessage})(SendMessage);