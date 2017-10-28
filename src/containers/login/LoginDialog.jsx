import React from 'react';
import {connect} from 'react-redux';
import {Button, message, Modal, Upload, Icon} from 'antd';
import {startLogin, loginInit, loginSuccess} from '../../actions/login';
import {startRegistry, registrySuccess, registryInit} from '../../actions/registry';
import LoginInputGroup from '../../component/login/LoginInputGroup';
import RegistryInputGroup from '../../component/login/RegistryInputGroup';
import {loginVerify} from '../../tools/index';
import {mapLoginProps} from '../../selector/main';
import './login.css';

class LoginDialog extends React.Component {
    constructor(props) {
        super(props);

        if (loginVerify()) {
            this.props.loginSuccess();
        }
        this.state = {
            userName: '',
            password: '',
            email: '',
            phone: '',
            type: 'login',
            uploadOptions: {
                name: 'file',
                action: `${window.APIDOMAIN}/upload`,
                headers: {
                    authorization: 'authorization-text',

                }
            },
            fileName: ''
        };
    }

    formValidate(value) {
        return value ? /^[A-Za-z0-9_]+$/.test(value) : false;
    }

    handleInput = (type, event) => {
        this.setState({
            [type]: event.target.value
        });
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

    changeToRegistry = () => {
        this.setState({
            type: 'registry'
        });
    };

    handleUpload = (info) => {
        if (info.file.status === 'done') {
            const {file: {response}} = info;
            if (response.code === 200) {
                let fileName = response.data.name;
                this.setState({fileName});
            } else {
                message.error(response.message);
            }
        } else if (info.file.status === 'error') {
            message.error('文件上传失败');
        }

    };

    handleRegistry = () => {
        const {userName, password, email, phone, fileName} = this.state;
        if (this.formValidate(password)) {
            this.props.startRegistry({
                userName,
                password,
                email,
                phone,
                avatar: fileName
            });
        } else {
            message.info('登陆信息不合法');
        }
    };

    handleRegistryFailed = () => {
        this.props.registryInit();
    };

    loginWindow() {
        const type = this.state.type;
        return <div>
            <Modal title="登陆失败" visible={this.props.userLogin.loginState === 'failed'}
                   onOk={this.handleLoginFailed} onCancel={this.handleLoginFailed}>
                <h4>{this.props.userLogin.message}</h4>
            </Modal>
            <Modal title="注册" visible={this.props.userRegistry.registryState === 'failed'}
                   onOk={this.handleRegistryFailed} onCancel={this.handleRegistryFailed}>
                <h4>{this.props.userRegistry.message}</h4>
            </Modal>
            <div className='login-content'>
                {type === 'login' &&
                <img className='logo' src={require('../../static/images/logo.jpg')} alt='logo'/>
                }
                <form>
                    <LoginInputGroup userName={this.state.userName} password={this.state.password}
                                     handleInput={this.handleInput}
                    />
                    {type !== 'login' &&
                    <RegistryInputGroup email={this.state.email} phone={this.state.phone}
                                        handleInput={this.handleInput}/>
                    }
                    {type !== 'login' &&
                    <Upload onChange={this.handleUpload} {...this.state.uploadOptions}>
                        <Button>
                            <Icon type="upload"/> Click to Upload
                        </Button>
                    </Upload>
                    }
                    {type === 'login' ? (
                            <div>
                                <div>
                                    <Button className="login-btn" onClick={this.handleLogin}>登陆</Button>
                                </div>
                                <div>
                                    <Button className="registry-btn" onClick={this.changeToRegistry}>注册</Button>
                                </div>
                            </div>) : (
                            <div>
                                <Button className="login-btn" onClick={this.handleRegistry}>注册</Button>
                            </div>  )
                    }
                </form>

            </div>
        </div>;
    }

    render() {
        const loginWindow = this.loginWindow();
        const isWindowShow = this.props.userLogin.loginState !== 'success'
                && this.props.userRegistry.registryState !== 'success';
        return isWindowShow && loginWindow;
    }
}

export default connect((
        {userLogin, userRegistry}) => ({userLogin: mapLoginProps(userLogin), userRegistry}),
        {startLogin, loginInit, loginSuccess, startRegistry, registryInit, registrySuccess}
        )(LoginDialog);