import React from 'react';
import {connect} from 'react-redux';
import {startFetchFriends} from '../../actions/fetchFriends';
import NavList from '../../containers/main/NavList';
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
        return <div>
            <ul>
                {
                    friendList.fetchState === 'success' &&
                    friendList.data.code === 200 &&
                    friendList.data.data.map(item => (<li key={item.name}>{item.name}</li>))
                }
            </ul>
        </div>;
    }
}

const FriendListWrap = NavList(FriendList);

export default connect(({fetchFriends})=>({fetchFriends}), {startFetchFriends})(FriendListWrap);