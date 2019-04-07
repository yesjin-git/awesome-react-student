import React, {Component} from "react"

class Writing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      content: "",
      isWritingTitleFocused: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(!this.state.title){
      return
    }else{
      this.props.save(this.state)
      this.setState({
        title: "",
        content: ""
      })
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleBlur = (event) => {
    if(event.target.value){
      this.setState({
        isWritingTitleFocused: true
      })
    }else{
      this.setState({
        isWritingTitleFocused: false
      })
    }
  }

  handleFocus = (e) => {
    if (!this.state.isWritingTitleFocused) {
      this.setState({
        isWritingTitleFocused: true
      })
    }
  }

  render() {
    const writingTitleProps = {
      title: this.state.title,
      handleChange: this.handleChange,
      handleFocus: this.handleFocus,
      handleBlur: this.handleBlur
    }

    const writingContentProps = {
      content: this.state.content,
      handleChange: this.handleChange,
      handleFocus: this.handleFocus
    }

    const {isWritingTitleFocused} = this.state
    const {handleSubmit} = this

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <WritingTitle {...writingTitleProps} />
          {isWritingTitleFocused && <WritingContent {...writingContentProps} />}
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

function WritingTitle(props) {
  return (
    <div className='input-field'>
      <input
        type='text'
        name='title'
        value={props.title}
        onChange={props.handleChange}
        onFocus={props.handleFocus}
        onBlur={props.handleBlur}
      />
    </div>
  )
}

function WritingContent(props) {
  return (
    <div className='input-field'>
      <input
        type='text'
        name='content'
        value={props.content}
        onChange={props.handleChange}
      />
    </div>
  )
}

export default Writing