import React from 'react';
import PropTypes from 'prop-types';
import {timeTransformer} from '../../tools/index';

class ChatListItem extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        avatar: PropTypes.string,
        message: PropTypes.string
    };
    static defaultProps = {
        name: 'jack',
        avatar: '//localhost:4000/avatar/kzpwwl969150.jpg',
        date: new Date().toDateString()
    };
    shouldComponentUpdate(nextProps) {
        return nextProps.date !== this.props.date;
    }
    render() {
        return [
            <img key={1} src={this.props.avatar} className="list-avatar" alt="avatar"/>,
            <div key={2}>
                <h3>{this.props.name}</h3>
                <p>
                    {
                        this.props.message &&
                        JSON.parse(this.props.message).message
                    }
                </p>
            </div>,
            <span key={3}>{timeTransformer(this.props.date)}</span>
        ];
    }
}

export default ChatListItem;