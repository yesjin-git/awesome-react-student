import React, {Component} from "react"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //state의 초기값을 설정합니다.
      savedNotes: ["default1", "default2"]
    }
  }

  save = (note) => {
    //설계한 함수의 상태를 확인하기 위해 save를 표시하도록 해봅시다.
    console.log(note + "is saved")
  }

  render() {
    return (
      <div className='App'>
        <Writing save={this.save} />
        {/* 원래 노트를 여러개 보내므로, Notes라고 하는게 좋겠지만 추후에 Note 컴포넌트로 활용할 예정이기 때문에 Note로 명명해 줍시다.*/}
        <Note savedNotes={this.state.savedNotes} />
      </div>
    )
  }
}

class Writing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: ""
    }
  }

  handleChange = (e) => {
    console.log("changed")
  }

  handleSave = (e) => {
    this.props.save("userInput")
  }

  render() {
    return (
      <form onSubmit={this.handleSave}>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
        />
        <input type='submit' />
      </form>
    )
  }
}

class Note extends Component {
  render() {
    const savedNotes = this.props.savedNotes

    return (
      <div>
        {/* 각각의 list item 들을 " " 로 연결시킵니다. */}
        {savedNotes.join(" ")}
      </div>
    )
  }
}

export default App
