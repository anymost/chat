import * as React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './configureStore';
import LoginDialog from './containers/login/LoginDialog';
import BgContainer from './containers/bgContainer/BgContainer';
import MainWindow from './page/mainWindow/MainWindow';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
          <BgContainer/>
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
                <IndexRoute component={MainWindow}/>
            </Route>
        </Router>
    </Provider>
);
export default Root;