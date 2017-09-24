import * as React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import store from './configureStore';
import Header from './containers/header/Header';
import LoginDialog from './containers/login/LoginDialog';
import FriendList from './page/friendList/FriendList'
import ChatWindow from './page/chatWindow/ChatWindow' 
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <LoginDialog/>
          <div>{this.props.children}</div>
      </div>
    );
  }
}

const Root = () => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <Route path='/friendList' component={FriendList}/>
                <Route path='/chatWindow' component={ChatWindow}/>
            </Route>
        </Router>
    </Provider>
);
export default Root;