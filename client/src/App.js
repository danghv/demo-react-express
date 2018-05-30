import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
    state = {
        greeting: ''
    }
    componentDidMount() {
        axios.get('/api/helloworld')
            .then(result => this.setState({greeting: result.data.sayHi}))
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <h1>{this.state.greeting}</h1>
      </div>
    );
  }
}

export default App;
