import React from 'react'
import {Input, Button, message, Modal} from 'antd'
import {startLogin, loginInit} from "../../actions/login"
import {connect} from 'react-redux'
import './login.css'

class LoginDialog extends React.Component {
    constructor(props) {
        super(props);
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
            if (!this.formValidate(userName)) {
                message.info('用户名只能为大小写字母，数字，下划线');
                return;
            }
            this.setState({userName});
        } else if (type === 'password') {
            let password = event.target.value;
            if (!this.formValidate(password)) {
                message.info('密码只能为大小写字母，数字，下划线');
                return;
            }
            this.setState({password});
        }
    };

    handleLogin = () => {
        const {userName, password} = this.state;
        const {startLogin} = this.props;
        if (this.formValidate(userName) && this.formValidate(password)) {
            startLogin({
                userName,
                password
            });
        } else {
            message.info('登陆信息不合法');
        }
    };

    handleLoginFailed = () => {
        const {loginInit: initLogin} = this.props;
        initLogin();
    };
    render() {
        const {userLogin} = this.props;
        return <div>
            <div className='login-container' />
            <Modal title="登陆失败"
                   visible={userLogin.loginState === 'failed'}
                   onOk = {this.handleLoginFailed} onCancel={this.handleLoginFailed}
            >由于网络错误，登陆失败</Modal>
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
}

export default connect(({userLogin}) => ({userLogin}), {startLogin, loginInit})(LoginDialog);