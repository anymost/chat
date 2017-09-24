import * as React from 'react';
import { Link } from 'react-router';
import { Layout, Avatar, Badge, Menu } from 'antd';
import './header.css';
const { Header } = Layout;
const { Item } = Menu;
class HeaderContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            infoCount: 0
        };
    }
    checkInfo = ()=>{
        alert('check');
    };
    render() {
        return (
            <div className="header-container">
                <Header className="header">
                    <h1>Free Chat</h1>

                    <Menu className="nav-list" mode="horizontal">
                        <Item key="friendList">
                            <Link to="/friendList">好友列表</Link>
                        </Item>
                        <Item>
                            <Link to="/chatWindow">聊天窗口</Link>
                        </Item>
                    </Menu>
                    <span className="avatar" onClick={this.checkInfo}>
                        <Badge count={this.state.infoCount}>
                            <Avatar icon="user"/>
                        </Badge>
                    </span>
                </Header>
            </div>
        );
    }
    componentWillMount() {

    }
}

export default HeaderContainer;