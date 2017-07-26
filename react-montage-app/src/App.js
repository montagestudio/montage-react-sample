
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

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
        let rangeValue = this.state.rangeValue,
            listItems = this.numbers.map(function (number) {
            return (
                <li key={number.toString()}>
                    <montage-element data-module-id="montage/ui/text.reel" data-value={number}></montage-element>
                </li>
            );
        });

        return (
            <div className="App" ref={(app) => { this.app = app; }}>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>I am a React App</h2>
                </div>
                <article>
                    <montage-element data-module-id="ui/title.reel"></montage-element>
                </article>
                <div className="App-intro">
                    <article className="example">
                        <h4>Montage Custom Element Sample:</h4>
                        <div className="example montage">
                            <montage-element data-module-id="ui/hello-world.reel"></montage-element>
                        </div>
                    </article>
                    <article className="example">
                        <h4>Montage + React Bindings Sample:</h4>
                        <div className="example montage">
                            <montage-element id="bindings-ref" data-module-id="ui/bindings.reel" data-value={rangeValue}></montage-element>
                        </div>
                        <div className="example react">
                            <p>How many likes React? : {rangeValue}</p>
                            <button onClick={(e) => this.resetRange(e)}>Reset Counter</button>
                        </div>
                    </article>
                    <article className="example">
                        <h4>React List + Montage Text Custom Element: </h4>
                        <ul className="list-number">{listItems}</ul>
                    </article>
                </div>
            </div>
        );
    }
}

export default App;
