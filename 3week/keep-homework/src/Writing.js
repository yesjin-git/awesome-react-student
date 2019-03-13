import React, {Component} from "react";

export default class Writing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "awesome",
      content: "react",
      isWritingTitleFocused: false
    }
  }

  handleSubmit = (e) => {    
    const {title, content} = this.state;
    e.preventDefault();

    if (title && content) {
      this.props.save(this.state);

      this.setState({
        title: "",
        content: ""
      })
    }

    this.handleBlur();
  }

  handleChange = (event) => {
    //key 내부에 []를 쓰면, 내부 자바스크립트를 따라 실행됩니다.
    //곧 이 경우 event.target.name에 접근하게 됩니다.
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleFocus = () => {
    const {isWritingTitleFocused} = this.state;

    if (isWritingTitleFocused) {
      return;
    }

    this.setState({
      isWritingTitleFocused: true
    })
  }

  handleBlur = () => {
    this.setState({
      isWritingTitleFocused: false
    })
  }

  render() {
    const {isWritingTitleFocused, title, content} = this.state;
    const {handleSubmit, handleChange, handleFocus, handleBlur} = this;

    const writingTitleProps = {
      title: title,
      handleChange: handleChange,
      handleFocus: handleFocus
    }

    const writingContentProps = {
      content: content,
      handleChange: handleChange,
      handleFocus: handleFocus,
      handleBlur: handleBlur
    }

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
        onFocus={props.handleFocus}
        onBlur={props.handleBlur}
      />
    </div>
  )
}