import React, { Component } from 'react'
import {connect} from "react-redux"
import {deleteTodo} from "../modules/actions"

export class DeleteTodo extends Component {
    
    handleDelete = id => {
        const {todos} = this.props
        const deletedTodo = todos.filter((todo, index) => todo.id !== id)
        console.log("delete")
        this.setState({
          todos : [...deletedTodo]
        })
      }

    render() {

        return (
            <div onClick={this.handleDelete}>
                <i>delete</i>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteTodo: todo => {
            dispatch(deleteTodo(todo));
        }
    };
};

const mapStateToProps = state => {
    return {todos: state.todos};
};
export default connect(mapStateToProps, mapDispatchToProps)(DeleteTodo);