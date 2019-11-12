// 함수형 컴포넌트에서는 리덕스 사용불가 -> 클레스형으로 변경
// react hooks 를 사용하면 사용가능
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