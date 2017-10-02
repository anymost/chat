import React from 'react'
import {connect} from 'react-redux'
import './mainwindow.css'

class ChatWindow extends React.Component{
    constructor(props) {
        super(props);
    }
    mainWindow() {
        return <div className="main-wrap">chat window</div>
    }
    render() {
        const isWindowShow = this.props.userLogin.loginState === 'success';
        return isWindowShow && this.mainWindow();
    }
}

export default connect(({userLogin}) => ({userLogin}))(ChatWindow);