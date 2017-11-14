import React from 'react';
import PropTypes from 'prop-types';
import '../../containers/friend/friendList.css';

class FriendItem extends React.Component{
    checkFriend = () => {
        this.context.checkFriend({
            id: this.props.id,
            name: this.props.name,
            avatar: this.props.avatar
        });
    };
    render() {
        return <li onClick={this.checkFriend} className='friend-item'>
            <img width='60px' height='50px'  src={this.props.avatar}
                alt={`friend-${Math.random()}`} />
            <h3>{this.props.name}</h3>
        </li>;
    }
}

FriendItem.contextTypes = {
    checkFriend: PropTypes.func
};

export default FriendItem;