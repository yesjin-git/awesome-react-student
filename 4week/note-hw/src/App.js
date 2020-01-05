import React from 'react';
import './App.css';
import AddTodo from "./containers/AddTodo"
import TodoList from "./containers/TodoList"

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <TodoList/>
    </div>
  );
}

export default App;