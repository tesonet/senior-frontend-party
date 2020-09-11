import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import GlobalStyle from './styles';
import LoginPage from '@/pages/Login/components/LoginPage/LoginPage';
import ServersPage from '@/pages/Servers/components/ServersPage/ServersPage';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/servers" component={ServersPage} />
        </Switch>
      </Router >
    </Provider >
  )
}

export default App;
