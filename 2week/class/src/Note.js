import React, {Component} from "react"
import {NoteTitle} from "./NoteTitle"
import {NoteContent} from "./NoteContent.js"
import './note.css'

class Note extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      title: this.props.title,
      content: this.props.content
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
  handleClick = (e) =>{
    // console.log(this.state.activated)
    if (!this.state.activated) {
      this.setState({
        activated: true
      })
    }
  }
  handleFocus = (e) =>{
    if (!this.state.isFocused) {
      this.setState({
        isFocused: true
      })
    }
  }
  handleBlur = (e) =>{
    // console.log('blur')
    if (!this.state.isBlurred){
      this.setState({
        isFocused: false
      })
    }
  }
  render() {
    const noteTitleProps = {
      id : this.props.id,
      title : this.state.title,
      handleChange: this.handleChange,
      // handleFocus: this.handleFocus,
    }
    const noteContentProps = {
      id : this.props.id,
      content : this.state.content,
      handleChange: this.handleChange,
      // handleBlur: this.handleBlur
    }
    console.log(typeof this.props.activatedId, typeof this.props.id)
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="Note col s12 m4 l3">
          <div className="DeleteBtn">
            <div className="DeleteBtn btn-floating btn-large" onClick={this.handleDelete}>
              <i id="Icon" className="material-icons">delete</i>
            </div>
          </div>
          <div className="card yellow lighten-4" >
            <div className="card-content black-text" id={this.props.id}>
              <NoteTitle {...noteTitleProps}/> 
              {this.props.activatedId*1 === this.props.id && <NoteContent {...noteContentProps}/>}
            </div>
          </div>
        </div>
      </form>
    

      // <div className='col s12 m6 l3'>
      //   <div className='card yellow lighten-4'>
      //     <span className='card-title'>{title}</span>
      //     <div className='card-content black-text'>{content}</div>
      //   </div>
      // </div>
    )
  }
}
export default Note 