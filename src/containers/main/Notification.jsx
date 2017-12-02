import React from 'react';
import PropTypes from 'prop-types';
import './notification.css';

class Notification extends React.Component {
    static contextTypes= {
        isEnablePushMessage: PropTypes.bool,
        pushMessage: PropTypes.string,
        avatar: PropTypes.string
    };
    splitMessage() {
        if (this.context.pushMessage) {
            if (this.context.pushMessage.length > 20) {
                return this.context.pushMessage.slice(0, 20);
            }
            return this.context.pushMessage;
        }
        return '';
    }
    render() {
        return <div ref='wrap' className='wrap'>
            <img src={this.context.avatar}/>
            <p>{this.splitMessage()}</p>
        </div>;
    }
    componentDidMount(){
        this.refs.wrap.classList.add('move-wrap');
    }
    componentDidUpdate () {
        this.Notification = window.Notification;
        if (this.context.isEnablePushMessage) {
            this.content = new this.Notification('您收到了新的消息', {
                body: this.context.pushMessage,
                icon: this.context.avatar,
                requireInteraction: true
            });
        }
    }
}

export default Notification;