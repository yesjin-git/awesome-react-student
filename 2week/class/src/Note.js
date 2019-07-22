import React, {Component} from "react"
import {NoteTitle} from "./NoteTitle"
import {NoteContent} from "./NoteContent.js"
import './note.css'

class Note extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFocused: false,
      id: "",
      title: "",
      content: ""
    }
  }
  // componentDidUpdate(){
  //   this.setState({
  //     id:this.props.id,
  //     title:this.props.title,
  //     content:this.props.content
  //   })
  // }
  componentDidMount(){
    this.setState({
      id:this.props.id,
      title:this.props.title,
      content:this.props.content
    })
  }
  handleDelete = (e) =>{
    this.props.delete(this.state.id)
  }
  handleFocus = (e) =>{
      if (!this.state.isFocused) {
      this.setState({
          isFocused: true
      })
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    this.props.update(this.state.id, this.state.title, this.state.content)
    e.preventDefault()
  }
  render() {
    const noteTitleProps = {
      title : this.state.title,
      handleChange: this.handleChange,
      handleFocus: this.handleFocus
    }
    const noteContentProps = {
      content : this.state.content,
      handleChange: this.handleChange,
    }

    const { id, title, content } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="Note col s12 m4 l3">
          <div className="DeleteBtn">
            <div className="DeleteBtn btn-floating btn-large" onClick={this.handleDelete}>
              <i id="Icon" className="material-icons">delete</i>
            </div>
          </div>
          <div className="card yellow lighten-4" >
            <div className="card-content black-text">
                {id}
              <span className="card-title">
                <NoteTitle {...noteTitleProps}/> 
              </span>
              <p>
                {this.state.isFocused && <NoteContent {...noteContentProps}/>}
              </p>
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