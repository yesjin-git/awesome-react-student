import React, {Component} from "react"

export default class WritingContent extends Component{
  render(){
    return (
      <input
        type='text'
        name='content'
        value={this.props.content}
        onChange={this.props.handleChange}
        placeholder="Input Content"
      />
    )
  }
}
