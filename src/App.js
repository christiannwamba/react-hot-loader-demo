import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      number : 0
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        Does the state persist now? The value is {this.state.number}
        </p>
        <button onClick={()=>this.setState({number : this.state.number + 1})}>+</button>
      </div>
    );
  }
}
export default App;