import React from 'react';
import './App.css';
import Counter from './Counter';
import Counter2 from './Counter2';
import Clock from './Clock';

class App extends React.Component {
  render() {
    const text = 'Counter';
    return (
      <div className="App">
        <header className="App-header">
          <h1>{text} 1</h1>
          <Counter number={0} />
          <h1>{text} 2</h1>
          <Counter2 number={0} />
          <h1>Clock</h1>
          <Clock />
        </header>
      </div>
    )
  }
}

export default App;
