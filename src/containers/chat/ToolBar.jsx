import React from 'react';
import {Icon} from 'antd';
import Picker from './Picker';
import './toolBar.css';

class ToolBar extends React.Component {
    selectEmoji = () => {
    };
    render() {
        return <div className="tool-bar-wrap">
            <Icon className="icon-png" type="smile-o" />
            <Icon className="icon-png" type="picture" />
            <Picker selectEmoji={this.selectEmoji}/>
        </div>;
    }
}

export default ToolBar;