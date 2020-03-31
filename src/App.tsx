import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Login } from './components/Login';
import { ServersList } from './components/ServersList';
import { storeBuilder } from './redux/store';
import './index.scss';

const App: React.FC = () => {
  return (
    <Provider store={storeBuilder()}>
      <BrowserRouter>
        <Switch>
          <Route path="/servers" exact component={ServersList} />
          <Route path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
