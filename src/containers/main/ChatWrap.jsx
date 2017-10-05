import React from 'react';
import {connect} from 'react-redux';
import HeadItem from '../../component/main/HeadItem';
import './chatWrap.css';

class ChatWrap extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return <div className="chat-wrap">
                <HeadItem name={JSON.stringify(this.props.chatWindow)}/>
        </div>;
    }
}

export default connect(({chatWindow})=>({chatWindow}))(ChatWrap);