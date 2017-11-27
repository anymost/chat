import React from 'react';
import PropTypes from 'prop-types';
import {notification} from 'antd';

class Main extends React.Component {
    static contextTypes= {
        isEnablePushMessage: PropTypes.bool,
        pushMessage: PropTypes.string,
        avatar: PropTypes.string
    };
    render() {
        if (this.context.isEnablePushMessage) {
            return null;
        }
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
            notification.info({
                message: '您收到了新的消息',
                description: this.context.pushMessage,
                icon: this.context.avatar
            });

        }
    }
}

export default Main;