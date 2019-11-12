import React, { Component } from "react";


export default class AddTodo extends Component {
  state = {
    todo: ""
  };
  handleChange = e => {
    this.setState({ todo: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const text = this.state.todo;
    const todos =this.props.todos;
    
    console.log(todos); 
    this.props.addTodo(text,todos); 
      
    this.setState({ todo: "" }); 

    

  };
   
  handleDelete = e => {
    console.log('ss');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div onClick={this.handleDelete}>
            검색
          </div>
          <input
            type="text"
            value={this.state.todo}
            onChange={this.handleChange}
          />
          <button type="submit">add</button>
        </form>
      </div>
    );
  }
}