import React, { Component } from "react";
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";
import * as globalActions from '../modules/actions'

class Todo extends Component {
  render() {
    const { id } = this.props.todo
    const { removeTodo } = this.props.globalActions
    return (
      <li style={{ listStyle: "none" }}>
        {this.props.todo.todo}
        <button onClick={() => removeTodo(id)}>x</button>
      </li>
    )
  }
}

export default connect(
  state => ({}),
  dispatch => ({
      globalActions: bindActionCreators(globalActions, dispatch),
  }),
)(Todo)