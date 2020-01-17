import React, { Component } from 'react'
import {connect} from "react-redux"
import {addTodo} from "../modules/actions"

export class AddTodo extends Component {
    state = {
        text: ""
    };
    
    handleChange = e => {
        this.setState({text: e.target.value});
    };

    handleSubmit = e => {
        const text = this.state.text;
        this.props.AddTodo(text);
        this.setState({text:""});
        e.preventDefault();
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.todo}
                        onChange={this.handleChange}
                    />
                    <button type="submit">add</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: todo => {
            dispatch(addTodo(todo));
        }
    };
};

const mapStateToProps = state => {
    return {todos: state.todos};
};
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);