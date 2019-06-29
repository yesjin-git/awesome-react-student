import React, { Component } from 'react'

export default class AddTodo extends Component {
    state = {
        todo: ""
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleClick}>
                    <input type="text" value={this.state.todo} onChange={this.handleChange} />
                    <button type="submit">add</button>
                </form>
            </div>
        )
    }

    handleChange = e => {
        this.setState({ todo: e.target.value })
        e.preventDefault();
    }

    handleClick = e =>  {
        e.preventDefault();
        const text = this.state.todo;
        this.props.onAddClick(text);
        
    }
}