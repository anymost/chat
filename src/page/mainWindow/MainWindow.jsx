import React from 'react';
import {connect} from 'react-redux';
import LeftNavBar from '../../containers/chat/LetNavBar';
import './mainwindow.css';

class MainWindow extends React.Component{
    constructor(props) {
        super(props);
    }
    mainWindow() {
        return <div className="main-wrap">
            <LeftNavBar/>
            {this.props.children}
        </div>;
    }
    render() {
        const isWindowShow = this.props.userLogin.loginState === 'success'
                || this.props.userRegistry.registryState === 'success';
        return isWindowShow && this.mainWindow();
    }
    componentWillMount() {

    }
}

export default connect(({userLogin, userRegistry}) => ({userLogin, userRegistry}))(MainWindow);