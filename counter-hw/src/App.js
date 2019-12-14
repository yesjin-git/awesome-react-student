import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";
import Clock from "./Clock";

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <Counter step={1} />
                    <Counter step={2} />
                    <p>----------------------------------------------</p>
                    <Clock/>
                </header>
            </div>
        );
    }
}

export default App;