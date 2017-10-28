import React from 'react';
import {Input} from 'antd';

function  LoginBtnGroup(props) {
    return ( <div>
        <div className='form-item'>
            <Input placeholder='请输入用户名' value={props.userName}
                   onChange={props.handleInput.bind(this, 'userName')}/>
        </div>
        <div className='form-item'>
            <Input type="password" placeholder='请输入密码' value={props.password}
                   onChange={props.handleInput.bind(this, 'password')}/>
        </div>
    </div>);

}

export default LoginBtnGroup;