import React from 'react';
import './headItem.css';

function HeadItem(props) {
    return <div className="head-item-wrap">
        <h2>{props.name}</h2>
    </div>;
}

export default HeadItem;