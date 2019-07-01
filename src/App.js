import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div onClick={this.props.onClick}>
        <p>Hello world, this component has been clicked {this.props.clicks}</p>
      </div>
    )
  }
}

export default App;
