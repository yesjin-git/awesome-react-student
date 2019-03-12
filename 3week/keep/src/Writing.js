import React, {Component} from "react"

export default class Writing extends Component {
    constructor(props) {
      super(props);

      this.state = {
          title: "awesome",
          content: "react",
          isWritingTitleFocused: false
      }
    }
  
    // state를 save 함수로 넘겨주게 만든다.
    // state를 객체로 넘겨, App 컴포넌트에서 제어하도록 만든다.
    // 추가적으로 content를 초기화 하는 것도 추가한다.
    handleSubmit = (e) => {
      // console.log('submitted')
      const {title, content} = this.state;
      e.preventDefault();

      // 둘 중 하나라도 null 이면 입력되지 않게 처리한다.
      if (!title || !content) {
          return;
      }

      this.props.save(this.state);

      this.setState({
            title: "",
            content: ""
        })
    }
  
    handleChange = (event) => {
      // console.log('userInput is ' + this.state.userInput)
      // key 내부에 [] 를 쓰면, 내부 자바스크립트를 따라 실행된다.
      // 이 경우 event.target.name에 접근하게 된다.
      this.setState({
        [event.target.name]: event.target.value
      })
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
            handleFocus: this.handleFocus
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
        <div className="input-field">
            <input
                type="text"
                name="title"
                value={props.title}
                onChange={props.handleChange}
                onFocus={props.handleFocus}
            />
        </div>
    )
}

function WritingContent(props) {
    return (
        <div className="input-field">
            <input
                type="text"
                name="content"
                value={props.content}
                onChange={props.handleChange}
            />
        </div>
    )
}