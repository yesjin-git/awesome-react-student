import React, {Component} from "react"
import {WritingTitle} from "./WritingTitle"
import {WritingContent} from "./WritingContent.js"

export default class Writing extends Component {
  state = {
      title: "",
      content: "",
  }

  render() {
    const { content, title } = this.state
    const { handleChange } = this
    
    const writingTitleProps = {
      title,
      handleChange,
    }
    const writingContentProps = {
      content,
      handleChange,
    }
    return (
      <form onSubmit={this.handleSubmit} id={-1}>
        <WritingTitle {...writingTitleProps}/>
        {this.props.activatedId*1 === -1 && <WritingContent {...writingContentProps}/>}
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
    this.setState({
      title: "",
      content: "",
    })
    e.preventDefault()
  }
}
