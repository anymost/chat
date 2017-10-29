import * as React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import store from './configureStore';
import ErrorHandler from './component/main/ErrorHandler';
import LoginDialog from './containers/login/LoginDialog';
import BgContainer from './containers/bgContainer/BgContainer';
import MainWindow from './page/mainWindow/MainWindow';
import Chat from './page/chat/Chat';
import List from './page/list/List';
import Setting from './page/setting/Setting';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <BgContainer/>
                <LoginDialog/>
                <MainWindow>
                    {this.props.children}
                </MainWindow>
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
                    <Route path="list" component={List}/>
                    <Route path="setting" component={Setting}/>
                </Route>
            </Router>
        </Provider>
    </ErrorHandler>
);
export default Root;