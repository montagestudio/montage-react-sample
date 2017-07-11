
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { rangeValue: 50 };
  }

  resetRange() {
    this.setState(prevState => ({
      rangeValue: 0
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <montage-title data-module-id="ui/title.reel"></montage-title>
          <montage-hello-world data-module-id="ui/hello-world.reel"></montage-hello-world>
          <montage-bindings data-module-id="ui/bindings.reel" data-value={this.state.rangeValue}></montage-bindings>
          <button onClick={(e) => this.resetRange(e)}>Reset</button>
        </p>
      </div>
    );
  }
}

export default App;
