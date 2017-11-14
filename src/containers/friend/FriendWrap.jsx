import React from 'react';
import ContentWrap from '../../containers/main/ContentWrap';

class FriendWrap extends React.Component {
    render() {
        return <div>
            <span>{this.props.friendInfo.id}</span>
            <span>{this.props.friendInfo.name}</span>
            <span>{this.props.friendInfo.avatar}</span>
        </div>;
    }
}

export default ContentWrap(FriendWrap);