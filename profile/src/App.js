import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './Body';
import NavBar from './NavBar';
import LsLogo from './LS-Logo.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
        <NavBar />
        <Body />
        <br />
          <img src={LsLogo} className="App-logo" alt="LS-Logo"/>
      </div>
    );
  }
}

export default App;