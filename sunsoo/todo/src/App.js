import React from 'react';
import './App.css';

import { connect } from "react-redux";
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { VisibilityFilter } from './reducers';

import { addTodo } from "./actions";

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <AddTodo onAddClick={props.addTodo} />
      <TodoList todos={props.visibleTodos} />
      <Footer />
    </div>
  );
}

function selectTodos(todos, filter) {
  console.log(todos)
  console.log(filter)
  switch(filter) {
    case VisibilityFilter.SHOW_ALL:
      return todos;
    case VisibilityFilter.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilter.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
}

export default connect(
  state => {
    return { visibleTodos: selectTodos(state.todos, state.visibilityFilter) };
  },
  dispatch => ({
    addTodo: (text) => {
      dispatch(addTodo(text));
    }
  })
)(App);