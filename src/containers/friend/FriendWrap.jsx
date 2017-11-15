import React from 'react';
import {browserHistory} from 'react-router';
import {Button} from 'antd';
import ContentWrap from '../../containers/main/ContentWrap';
import './friendWrap.css';

class FriendWrap extends React.Component {
    sendMessage = () => {
        browserHistory.push('/');
    };
    render() {
        if (this.props.friendInfo.id) {
            return <div className="friend-wrap">
                <img
                    alt={`friend-wrap-${Math.random()}`}
                    src={this.props.friendInfo.avatar}
                />
                <h3>{this.props.friendInfo.name}</h3>
                <Button value='large' type='primary'
                    onClick={this.sendMessage.bind(this,
                        this.props.friendInfo.id)}
                >
                    发送消息
                </Button>
            </div>;
        }
        return null;
    }
}

export default ContentWrap(FriendWrap);