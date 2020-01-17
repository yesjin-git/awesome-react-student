import React, { Component } from 'react'
import Todo from '../components/Todo';
import {connect} from "react-redux";
import { deleteTodo } from '../modules/actions';

class TodoList extends Component {

    render() {
        const {todos} = this.props;
        //console.log(todos[0])
        return (
            <div>
                <ul>
                    {todos.map((todo, index) => (
                        <Todo key={index} todo={todo} />
                    ))}
                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {};

const mapStateToProps = state => {
    return {todos: state.todos};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);