import React, {Component} from "react"

class Writing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "awesome",
      content: "react",
      // view의 상태를 관리하는 state는 주로 isXXX형태로 명명해 명확하게 표현해줍니다.
      isWritingTitleFocused: false
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
    if (!this.state.isWritingTitleFocused) {
      this.setState({
        isWritingTitleFocused: true
      })
    }
  }

  handleFocusOut = (e) => {
    if (this.state.isWritingTitleFocused) {
      this.setState({
        isWritingTitleFocused: false
      })
    }
  }


  render() {
    const writingTitleProps = {
      title: this.state.title,
      handleChange: this.handleChange,
      handleFocus: this.handleFocus,
      handleFocusOut: this.handleFocusOut
    }

    const writingContentProps = {
      content: this.state.content,
      handleChange: this.handleChange
    }

    const {isWritingTitleFocused} = this.state
    const {handleSubmit} = this

    return (
      <div>
        <form onSubmit={handleSubmit}>
        {/* Props가 길어지는 경우 가시성을 위해 객체로 정의해, 아래와 같이 넘겨줄 수 있습니다.  */}
          <WritingTitle {...writingTitleProps} />
          {isWritingTitleFocused && <WritingContent {...writingContentProps} />}
        </form>
      </div>
    )
  }
}
//함수형 컴포넌트 예시 입니다. 함수형 컴포넌트에 대한 교육자료를 참고해 주세요. 
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
      />
      <input type='submit' value='Submit' />
    </div>
    
  )
}

export default Writing
