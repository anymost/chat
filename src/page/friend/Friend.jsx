import React from 'react';
import FriendList from '../../containers/friend/FriendList';
import FriendWrap from '../../containers/friend/FriendWrap';
import './friend.css';

class Friend extends React.Component{
    render() {
        return <div>
            <FriendList/>
            <FriendWrap/>
        </div>;
    }
}

export default Friend;