import React from 'react';
import PropTypes from 'prop-types';
import {notification} from 'antd';

class Notification extends React.Component {
    static contextTypes= {
        isEnablePushMessage: PropTypes.bool,
        pushMessage: PropTypes.string,
        avatar: PropTypes.string
    };
    render() {
        return <div/>;
    }
    componentDidUpdate () {
        this.Notification = window.Notification;
        if (this.context.isEnablePushMessage) {
            this.content = new this.Notification('您收到了新的消息', {
                body: this.context.pushMessage,
                icon: this.context.avatar,
                requireInteraction: true
            });
        } else {
            notification.success({
                message: '您收到了新的消息',
                description: this.context.pushMessage
            });

        }
    }
}

export default Notification;