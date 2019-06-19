import React, {Component} from "react"

class Writing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      content: "",
      titleFocused: false,
      contentFocused: false,
      isShowContent: false,
    }
  }

  handleSubmit = (e) => {
    this.props.save(this.state)
    this.setState({
      title: "",
      content: ""
    })
    e.preventDefault()
  }

  handleChange = ({target}) => {
    //key 내부에 []를 쓰면, 내부 자바스크립트를 따라 실행됩니다.
    //곧 이 경우 event.target.name에 접근하게 됩니다.
    this.setState({
      [target.name]: target.value
    })
  }

  handleFocus = (e) => {
    this.setState({
      isShowContent: true,
      [e.target.name + "Focused"]: true,
    })
  }

  handleBlur = (e) => {
    this.setState({
      [e.target.name + "Focused"]: false,
    })

    if(e.relatedTarget==null || e.relatedTarget.name!='content') {
      if(this.state.title == "" && this.state.content=="") {
        this.setState({
          isShowContent: false
        })
      }
    }
  }

  render() {
    const {isShowContent} = this.state

    const writingTitleProps = {
      title: this.state.title,
      handleChange: this.handleChange,
      handleFocus: this.handleFocus,
      handleBlur: this.handleBlur,
    }

    const writingContentProps = {
      content: this.state.content,
      handleChange: this.handleChange,
      handleFocus: this.handleFocus,
      handleBlur: this.handleBlur,
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <WritingTitle {...writingTitleProps} />
          {isShowContent && <WritingContent {...writingContentProps} />}
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
        onClick={props.handleClick}
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
        onClick={props.handleClick}
      />
    </div>
  )
}

export default Writing
