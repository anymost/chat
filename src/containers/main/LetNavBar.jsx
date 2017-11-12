import React from 'react';
import {Link} from 'react-router';
import {Icon} from 'antd';
import {getUserInfo} from '../../tools/index';
import '../../page/main/wrap.css';

class LeftNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultIndex: 0
        };
    }
    changeIcon = (index) => {
        this.setState({
            defaultIndex: index
        });
    };
    render() {
        const {avatar} = getUserInfo();
        const listInfo = [
            {route: '/', type: 'book'},
            {route: '/friend', type: 'user'},
            {route: '/setting', type: 'setting'}
        ];

        return <div className="let-nav-wrap">
            <img width={'60px'} height={'55px'} className="avatar" src={avatar} alt="avatar"/>
            <ul>
                {
                    listInfo.map((item, index) => {
                        return <li className='icon-item' key={index}>
                            <Link to={item.route}>
                                <Icon onClick={this.changeIcon.bind(this, index)} type={item.type}
                                    className={this.state.defaultIndex === index && 'active-color'}/>
                            </Link>
                        </li>;
                    })
                }
            </ul>
        </div>;
    }
}

export default LeftNavBar;