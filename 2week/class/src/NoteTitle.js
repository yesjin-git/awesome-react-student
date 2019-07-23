import React, {Component} from "react"

export default class NoteTitle extends Component{
  render(){
    if (!this.props.activated) {
      return <h3>{this.props.propsTitle}</h3>
    } 
    else{
      return (
        <input
          type='text'
          name='title'
          value={this.props.title}
          onChange={this.props.handleChange}
        />
      )
    }
  }
}