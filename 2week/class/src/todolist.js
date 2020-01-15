import React from 'react';
import TodoForm from './todoform';
export default class TodoList extends React.Component{

    state = {
        todos :[]
    }

    addTodo = (todo) =>{
        
        this.setState({

            todos: [todo ,...this.state.todos]
        });
    }

  render(){
    return <TodoForm onSubmit={this.addTodo}/> 
  }  
}   

 