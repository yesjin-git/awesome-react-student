import React, {Component} from "react"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //state의 초기값을 설정합니다.
      savedNotes: [{content: "default1"}, {content: "default2"}]
    }
  }

  save = (content) => {
    //설계한 함수의 상태를 확인하기 위해 save를 표시하도록 해봅시다.
    console.log(content + "is saved")
  }

  render() {
    return (
      <div className='App'>
        <Writing save={this.save} />
        {/* 원래 노트를 여러개 보내므로, Notes라고 하는게 좋겠지만 추후에 Note 컴포넌트로 활용할 예정이기 때문에 Note로 명명해 줍시다.*/}
        <Note content={this.state.savedNotes[0].content} />
      </div>
    )
  }
}

class Writing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: ""
    }
  }

  handleChange = (e) => {
    console.log("changed")
  }

  handleSubmit = (e) => {
    this.props.save("content")
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <input type='submit' />
      </form>
    )
  }
}

class Note extends Component {
  render() {
    const { content } = this.props

    return (
      <div>
        {content}
      </div>
    )
  }
}

export default App
