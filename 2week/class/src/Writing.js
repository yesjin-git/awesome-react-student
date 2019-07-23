import React, {Component} from "react"
import {WritingTitle} from "./WritingTitle"
import {WritingContent} from "./WritingContent.js"

class Writing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // id: -1,
      title: "",
      content: "",
      isFocused: false,
      activated: 0,
    }
  }

  render() {
    const writingTitleProps = {
      title : this.state.title,
      handleChange : this.handleChange,
      // handleFocus: this.handleFocus,
    }
    const writingContentProps = {
      Content : this.state.content,
      handleChange : this.handleChange,
      // handleBlur: this.handleBlur
    }
    // onFocus={this.handleFocus} onBlur={this.handleBlur}
    return (
      <form onSubmit={this.handleSubmit}>
        <WritingTitle {...writingTitleProps}/>
        <WritingContent {...writingContentProps}/>
        <input type='submit' />
      </form>
    )
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    this.props.save(this.state.title, this.state.content)
    e.preventDefault()
  }
  handleClick = (e) =>{
    console.log(this.state.activated)
    if (!this.state.activated) {
      this.setState({
        activated: true
      })
    }
  }
  handleFocus = (e) =>{
    console.log('handleFocus')
    if (!this.state.isFocused) {
      this.setState({
        isFocused: true
      })
    }
  }

  handleBlur = (e) =>{
    console.log('blur')
    if (!this.state.isBlurred){
      this.setState({
        isFocused: false
      })
    }
  }
}


export default Writing
