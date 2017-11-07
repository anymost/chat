import React from 'react';
import {Emoji} from 'emoji-mart';

function EmojiComponent(props) {
    return <Emoji emoji={props.emoji} size={20}/>;

}

export default EmojiComponent;