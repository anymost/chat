import React from 'react';
import {Input} from 'antd';

function  RegistryInputGroup(props) {
    return ( <div>
        <div className='form-item'>
            <Input placeholder='请输入邮箱' value={props.email}
                onChange={props.handleInput.bind(this, 'email')}/>
        </div>
        <div className='form-item'>
            <Input placeholder='请输入手机号' value={props.phone}
                onChange={props.handleInput.bind(this, 'phone')}/>
        </div>

    </div>);

}

export default RegistryInputGroup;