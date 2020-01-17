import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import AddTodo from './containers/AddTodo'
import TodoList from './containers/TodoList'

class App extends Component {

  render() {
    return (
      <div className="App">
        <AddTodo />
        <TodoList />
      </div>
    );
    
  }
}

export default App;
