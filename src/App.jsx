import * as React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import io from 'socket.io-client';
import PropTypes from 'prop-types';
import store from './configureStore';
import ErrorHandler from './component/main/ErrorHandler';
import LoginDialog from './containers/login/LoginDialog';
import BgContainer from './containers/bgContainer/BgContainer';
import Wrap from './page/main/Wrap';
import Chat from './page/chat/Chat';
import Friend from './page/friend/Friend';
import Setting from './page/setting/Setting';
import Notification from './containers/main/Notification';
import {getUserInfo} from './tools';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnablePushMessage: false,
            pushMessage: 'hello world',
            avatar: '//localhost:4000/avatar/eruglu815638.jpg'
        };
        this.Notification = window.Notification;
        this.socket = io('//localhost:4000');
    }
    static childContextTypes = {
        isEnablePushMessage: PropTypes.bool,
        pushMessage: PropTypes.string,
        avatar: PropTypes.string,
        socket: PropTypes.object
    };
    getChildContext() {
        return {
            isEnablePushMessage: this.state.isEnablePushMessage,
            pushMessage: this.state.pushMessage,
            avatar: this.state.avatar,
            socket: this.socket
        };
    }

    render() {
        return (
            <div className="App">
                <BgContainer/>
                <LoginDialog/>
                <Wrap>
                    {this.props.children}
                </Wrap>
                <Notification/>
            </div>
        );
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.socket.emit('ws', {
                id: getUserInfo().id
            });
        }, 1000 * 30);
        if (this.Notification.permission === 'granted') {
            this.setState({
                isEnablePushMessage: true
            });
        } else if (this.Notification.permission === 'default') {
            this.Notification.requestPermission()
                .then(value => {
                    if (value === 'granted') {
                        this.setState({
                            isEnablePushMessage: true
                        });
                    }
                });
        }
    }
    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
}

const Root = () => (
    <ErrorHandler>
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={Chat}/>
                    <Route path='chat/:id' component={Chat}/>
                    <Route path='friend' component={Friend}/>
                    <Route path='setting' component={Setting}/>
                </Route>
            </Router>
        </Provider>
    </ErrorHandler>
);
export default Root;