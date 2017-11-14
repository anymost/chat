import React from 'react';
import {connect} from 'react-redux';
import {startFetchFriends} from '../../actions/fetchFriends';
import NavList from '../../containers/main/NavList';
import FriendItem from '../../component/friend/FriendItem';
import {getUserInfo} from '../../tools/index';



class FriendList extends React.Component {
    constructor(props) {
        super(props);
        this.id = getUserInfo().id;
    }
    componentWillMount() {
        this.props.startFetchFriends(this.id);
    }
    render() {
        const friendList = this.props.fetchFriends;
        return <ul className='friend-list'>
            {
                friendList.fetchState === 'success' &&
                friendList.data.code === 200 &&
                friendList.data.data.map(item =>
                    <FriendItem key={item.name} {...item}/>)
            }
        </ul>;
    }
}

const FriendListWrap = NavList(FriendList);

export default connect(({fetchFriends})=>({fetchFriends}), {startFetchFriends})(FriendListWrap);