import React from 'react'
import {Input, Button, message, Modal} from 'antd'
import {startLogin, loginInit, loginSuccess} from "../../actions/login";
import {connect} from 'react-redux'
import { liginVerify } from '../../tools/index';
import './login.css'

class LoginDialog extends React.Component {
    constructor(props) {
        super(props);

        if (liginVerify()){
            this.props.loginSuccess();
        }
        this.state = {
            userName: '',
            password: ''
        }
    }
    formValidate (value) {
        return value ? /^[A-Za-z0-9_]+$/.test(value) : false;
    }
    handleForm = (type, event) => {
        if (type === 'userName') {
            let userName = event.target.value;
            this.setState({userName});
        } else if (type === 'password') {
            let password = event.target.value;
            this.setState({password});
        }
    };

    handleLogin = () => {
        const {userName, password} = this.state;
        if (this.formValidate(userName) && this.formValidate(password)) {
            this.props.startLogin({
                userName,
                password
            });
        } else {
            message.info('登陆信息不合法');
        }
    };

    handleLoginFailed = () => {
        this.props.loginInit();
    };
    loginWindow() {
        return <div>
            <Modal title="登陆失败"
                   visible={this.props.userLogin.loginState === 'failed'}
                   onOk = {this.handleLoginFailed} onCancel={this.handleLoginFailed}
            ><h4>{this.props.userLogin.message}</h4></Modal>
            <div className='login-content'>
                <img className='logo' src={require('../../static/images/logo.jpg')} alt='logo'/>
                <form>
                    <div className='form-item'>
                        <Input placeholder='请输入用户名' value={this.state.userName}
                               onChange={this.handleForm.bind(this, 'userName')}/>
                    </div>
                    <div className='form-item'>
                        <Input placeholder='请输入密码' value={this.state.password}
                               onChange={this.handleForm.bind(this, 'password')}/>
                    </div>
                    <div><Button onClick={this.handleLogin}>登陆</Button></div>
                </form>
            </div>
        </div>;
    }
    render() {
        const loginWindow = this.loginWindow();
        const isWindowShow = this.props.userLogin.loginState !== 'success';
        return isWindowShow && loginWindow;
    }
}

export default connect(({userLogin}) => ({userLogin}),
        {startLogin, loginInit, loginSuccess})(LoginDialog);