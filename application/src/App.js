import React, { Component } from 'react';
import Routes from './Routes';
import { persistStore } from 'redux-persist';
import store from './Store';
import LoadingPage from './components/LoadingPage';
import { Provider } from 'react-redux';
import './App.css';

class App extends Component {
    constructor() {
      super()
      this.state = { rehydrated: false }
    }

    componentWillMount(){
    persistStore(store, {}, () => {
      this.setState({ rehydrated: true })
    })
  }

    render() {
      if(!this.state.rehydrated){
        return <LoadingPage />
      }
    return (
        <Provider store={store}>
          <div className="App">
            <Routes />
          </div>
        </Provider>
    );
  }
}

export default App;
