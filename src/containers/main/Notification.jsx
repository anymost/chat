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
    handleMove() {
        if (!this.context.isEnablePushMessage) {
            this.refs.wrap.classList.add('move-wrap');
        }
    }
    render() {
        if (!this.context.isEnablePushMessage) {
            return <div ref='wrap' className='wrap'>
                <img src={this.context.avatar}/>
                <p>{this.splitMessage()}</p>
            </div>;
        }
        return <div/>;
    }
    componentDidMount(){
        this.handleMove();
    }

    componentDidUpdate () {
        this.Notification = window.Notification;
        if (this.context.isEnablePushMessage) {
            this.content = new this.Notification('您收到了新的消息', {
                body: this.splitMessage(),
                icon: this.context.avatar,
                requireInteraction: true
            });
        }
        this.handleMove();
    }
}

export default Notification;