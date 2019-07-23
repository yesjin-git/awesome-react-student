import React, {Component} from "react"
import {NoteTitle} from "./NoteTitle"
import {NoteContent} from "./NoteContent.js"
import './note.css'

export default class Note extends Component {
  constructor(props) {
    super(props)
    const { id, title, content } = this.props
    this.state = {
      id,
      title,
      content,
    }
  }
  handleDelete = (e) =>{
    this.props.delete(this.props.id)
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    this.props.update(this.props.id, this.state.title, this.state.content)
    e.preventDefault()
  }
  
  render() {
    const {id, title, content} = this.state
    const {handleChange} = this
    const noteTitleState = {
      id,
      title,
      handleChange,
    }
    const noteTitleProps = {
      propsTitle: this.props.title
    }
    const noteContentState = {
      id,
      content,
      handleChange,
    }
    const noteContentProps = {
      propsContent: this.props.content
    }

    return (
        <div className="Note col s12 m4 l3">
          <div className="DeleteBtn">
            <div className="DeleteBtn btn-floating btn-large" onClick={this.handleDelete}>
              <i id="Icon" className="material-icons">delete</i>
            </div>
          </div>
          <div className="card yellow lighten-4" >
            <form className="card-content black-text" id={this.props.id} onSubmit={this.handleSubmit}>
              <NoteTitle {...noteTitleState} {...noteTitleProps} activated={this.props.activatedId*1 === this.props.id}/>
              <NoteContent {...noteContentState} {...noteContentProps} activated={this.props.activatedId*1 === this.props.id}/>
            </form>
          </div>
        </div>
    )
  }
}
