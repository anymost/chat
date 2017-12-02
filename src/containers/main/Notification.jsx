import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'antd';
import './notification.css';

class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        };
    }
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
        this.setState({
            isShow: true
        });
        this.refs.wrap.classList.add('move-wrap');
        this.timer = setTimeout(() => {
            this.setState({
                isShow: false
            });
        }, 5000);
    }
    closeDialog = () => {
        this.setState({
            isShow: false
        });
    };
    render() {
        if (!this.context.isEnablePushMessage && this.state.isShow === true) {
            return <div ref='wrap' className='wrap'>
                <img src={this.context.avatar}/>
                <p>{this.splitMessage()}</p>
                <Icon type="close" onClick={this.closeDialog} />
            </div>;
        }
        return <div/>;
    }
    componentDidMount(){
        if (!this.context.isEnablePushMessage) {
            this.handleMove();
        }
    }

    componentWillReceiveProps () {
        this.Notification = window.Notification;
        if (this.context.isEnablePushMessage) {
            this.content = new this.Notification('您收到了新的消息', {
                body: this.splitMessage(),
                icon: this.context.avatar,
                requireInteraction: true
            });
        } else {
            this.handleMove();
        }
    }

    componentWillUnmount() {
        if(this.timer) {
            clearTimeout(this.timer);
        }
    }
}

export default Notification;