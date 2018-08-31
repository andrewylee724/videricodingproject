import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './components/Login.jsx';
import Main from './components/Main.jsx';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state =  {
      isLoggedIn: false
    }

    this.validateLogin = this.validateLogin.bind(this)
  }

  validateLogin() {
    this.setState({isLoggedIn: true})
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoggedIn ? <Main/> : <Login validateLogin={this.validateLogin} /> }
      </div>
    );
  }
}

export default App;
