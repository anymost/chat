import React from 'react';
import './headItem.css';

function HeadItem(props) {
    return <div className="head-item-wrap">
        <h4>{props.name}</h4>
    </div>
}

export default HeadItem;