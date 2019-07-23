import React, {Component, Fragment} from "react"

export default class NoteContent extends Component{
  render(){
    if (!this.props.activated) {
      return <p>{this.props.propsContent}</p>
    } 
    else{
      return (
        <Fragment>
          <input
          type='text'
          name='content'
          value={this.props.content}
          onChange={this.props.handleChange}
          />
          <input type='submit' />
        </Fragment>
      )
    }
  }
}
