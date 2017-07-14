
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { rangeValue: 0 };
        this.handleAttributeChange = this.handleAttributeChange.bind(this);
    }

    resetRange() {
        this.setState(prevState => ({
            rangeValue: 0
        }));
    }

    handleAttributeChange(event) {
        if (event.detail.attribute === "data-value") {
            this.setState(prevState => ({
                rangeValue: event.detail.newValue
            }));
        }
    }

    componentDidMount() {
        this.app.addEventListener("dataAttributeChange", this.handleAttributeChange);
    }

    componentWillUnmount() {
        this.app.removeEventListener("dataAttributeChange", this.handleAttributeChange);
    }

    render() {
        let rangeValue = this.state.rangeValue;

        return (
            <div className="App" ref={(app) => { this.app = app; }}>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <div className="App-intro">
                    <montage-element data-module-id="ui/title.reel"></montage-element>
                    <montage-element data-module-id="ui/hello-world.reel"></montage-element>
                    <h4>How many YEAH? : {rangeValue}</h4>
                    <montage-element data-module-id="ui/bindings.reel" data-value={rangeValue}></montage-element>
                    <button onClick={(e) => this.resetRange(e)}>Reset</button>
                </div>
            </div>
        );
    }
}

export default App;
