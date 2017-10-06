import React from 'react';
import ToolBar from './ToolBar';
import './sendMessage.css';

class SendMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="send-wrap">
            <ToolBar/>
            <textarea className="input-content"></textarea>
        </div>;
    }
}

export default SendMessage;