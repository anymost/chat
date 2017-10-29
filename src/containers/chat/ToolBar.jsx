import React from 'react';
import {Icon} from 'antd';
import Picker from './Picker';
import './toolBar.css';

class ToolBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPickerShow: false
        };
    }
    showPicker = () => {
        this.setState({
            isPickerShow: true
        });
    };
    render() {
        return <div className="tool-bar-wrap">
            <Icon onClick={this.showPicker} className="icon-png" type="smile-o" />
            <Icon className="icon-png" type="picture" />
            {this.isPickerShow && <Picker />}
        </div>;
    }
}

export default ToolBar;