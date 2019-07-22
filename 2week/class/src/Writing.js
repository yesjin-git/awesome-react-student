import React, {Component} from "react"
import {WritingTitle} from "./WritingTitle"
import {WritingContent} from "./WritingContent.js"

class Writing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFocused: false,
      title: "",
      content: ""
    }
  }

  render() {
    const writingTitleProps = {
      title : this.state.title,
      handleChange : this.handleChange,
      handleFocus: this.handleFocus
    }
    const writingContentProps = {
      Content : this.state.content,
      handleChange : this.handleChange
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <WritingTitle {...writingTitleProps}/>
        {/* <WritingTitle title={this.state.title} handleChange={this.handeChange}/> */}
        {this.state.isFocused && <WritingContent {...writingContentProps}/>}
        {/* {renderWritingContent} */}
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
  handleFocus = (e) =>{
    if (!this.state.isFocused) {
      this.setState({
        isFocused: true
      })
    }
  }
}


export default Writing
