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
    handlePickerShow = (value) => {
        this.setState({
            isPickerShow: value
        });
    };
    render() {
        const {isPickerShow} = this.state;
        return <div className="tool-bar-wrap">
            <Icon onClick={this.handlePickerShow.bind(this, !isPickerShow)}
                className="icon-png" type="smile-o" />
            <Icon className="icon-png" type="picture" />
            {
                this.state.isPickerShow &&
                <Picker hidePicker={this.handlePickerShow.bind(this, false)} />
            }
        </div>;
    }
}

export default ToolBar;