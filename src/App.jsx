import * as React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import store from './configureStore';
import ErrorHandler from './component/main/ErrorHandler';
import LoginDialog from './containers/login/LoginDialog';
import BgContainer from './containers/bgContainer/BgContainer';
import Wrap from './page/main/Wrap';
import Chat from './page/chat/Chat';
import Friend from './page/friend/Friend';
import Setting from './page/setting/Setting';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <BgContainer/>
                <LoginDialog/>
                <Wrap>
                    {this.props.children}
                </Wrap>
            </div>
        );
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