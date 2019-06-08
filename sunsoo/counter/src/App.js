import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Clock from './Clock';

class App extends React.Component {
  render() {
    const text = '안녕';
    return (
      <div className="App">
        <header className="App-header">
          <p>{text}</p>
          <Counter number={2} />
          <Clock />
        </header>
      </div>
    )
  }
}

export default App;
