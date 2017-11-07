import React from 'react';
import {Icon, Upload, message} from 'antd';
import Picker from './Picker';
import './toolBar.css';


class ToolBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPickerShow: false
        };
        this.uploadState = {
            name: 'file',
            action: `${window.APIDOMAIN}/upload`,
            showUploadList: false,
            headers: {
                authorization: 'authorization-text',

            }
        };
    }
    handlePickerShow = (value) => {
        this.setState({
            isPickerShow: value
        });
    };
    handleUpload = (info) => {
        if (info.file.status === 'done') {
            const {file: {response}} = info;
            if (response.code === 200) {
                this.filePath = response.data.name;
                this.props.sendPicture(this.filePath);
            } else {
                message.error(response.message);
            }
        } else if (info.file.status === 'error') {
            message.error('文件上传失败');
        }
    };
    render() {
        const {isPickerShow} = this.state;
        return <div className="tool-bar-wrap">
            <Icon onClick={this.handlePickerShow.bind(this, !isPickerShow)}
                className="icon-png" type="smile-o" />
            <Upload className="icon-png" {...this.uploadState} onChange={this.handleUpload}>
                <Icon style={{display: 'inline-block', fontSize: '26px'}}
                    type="picture" />
            </Upload>
            {
                this.state.isPickerShow &&
                <Picker hidePicker={this.handlePickerShow.bind(this, false)} />
            }
        </div>;
    }
}

export default ToolBar;