import React from 'react';
import PropTypes from 'prop-types';
import FriendList from '../../containers/friend/FriendList';
import FriendWrap from '../../containers/friend/FriendWrap';
import './friend.css';

class Friend extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            friendInfo: {}
        };
    }
    getChildContext() {
        return {
            checkFriend: this.checkFriend
        };
    }
    checkFriend = (value) => {
        this.setState({
            friendInfo: {
                id: value.id,
                name: value.name,
                avatar: value.avatar
            }
        });
    };
    render() {
        return <div>
            <FriendList/>
            <FriendWrap friendInfo={this.state.friendInfo}/>
        </div>;
    }
}
Friend.childContextTypes = {
    checkFriend: PropTypes.func
};

export default Friend;