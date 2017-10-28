import React from 'react';
import {Link} from 'react-router';
import {Icon} from 'antd';
import {getUserInfo} from "../../tools/index";
import '../../page/mainWindow/mainwindow.css';

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
        return <div className="let-nav-wrap">
            <img width={"60px"} height={"55px"} className="avatar"
                 src={avatar} alt="avatar"/>
            <ul>
                <li className="icon-item">
                    <Link to="/">
                        <Icon onClick={this.changeIcon.bind(this, 0)} type="book"
                            className={this.state.defaultIndex === 0 && 'active-color'}/>
                    </Link>
                </li>
                <li className="icon-item">
                    <Link to="/list">
                        <Icon onClick={this.changeIcon.bind(this, 1)}  type="user"
                            className={this.state.defaultIndex === 1 && 'active-color'}/>
                    </Link>
                </li>
                <li className="icon-item">
                    <Link to="/setting">
                        <Icon onClick={this.changeIcon.bind(this, 2)} type="setting"
                            className={this.state.defaultIndex === 2 && 'active-color'}/>
                    </Link>
                </li>

            </ul>
        </div>;
    }
}

export default LeftNavBar;