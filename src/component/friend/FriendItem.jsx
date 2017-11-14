import React from 'react';

function FriendItem(props) {
    return <li className='friend-item' data-user-id={props.id}>
        <img width='60px' height='50px' className='avatar' src={props.avatar}/>
        <h4>{props.name}</h4>
    </li>;
}

export default FriendItem;