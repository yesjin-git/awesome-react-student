import React,{Component} from "react"
import "materialize-css"
import "materialize-css/dist/css/materialize.min.css"

import Writing from './Writing.js'
import Note from './Note.js'

class App extends Component {
  constructor(props) {
    //constructor를 직접 쓰려면, 반드시 super를 써야 한다. super에서 props를 인자로 갖으므로, constructor를 쓸때 props를 써줘야 한다.
    super(props)
    //state 초기값을 설정한다.
    this.state = {
      savedNotes: [
        //편의를 위해 content 라는 key값을 줘보겠습니다.
        // {} 안에는 key: value 형태로 값을 지정해 줄 수 있습니다.
        //
        {id: 0, content: "default1"},
        {id: 1, content: "default2"},
        {id: 2, content: "default3"}
      ]
    }
  }

  handleSubmit = (userInput) => {
    const savedNotes = this.state.savedNotes
    this.setState({
      savedNotes: [
        ...savedNotes, 
        //content 안에 userInput을 넣어야, content로 저장이 됩니다.
        {content: userInput}
      ]
    })
  }

  render() {
    return (
      <div>
        <Writing submit={this.handleSubmit} />
        <div className='row'>
          {this.state.savedNotes.map((note, index) => (
            <Note content={note.content} key={index} />
          ))}
        </div>
      </div>
    )
  }
}

class Writing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: "test"
    }
  }

  handleSubmit = (e) => {
    console.log('submitted')
    this.props.submit(this.state.userInput)
    e.preventDefault();
  }

  handleChange = (event) => {
    console.log('userInput is ' + this.state.userInput)
    this.setState({
      userInput: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input
              type='text'
              value={this.state.userInput}
              onChange={this.handleChange}
            />
          </div>
          <input
            type='submit'
            value='Submit'
          />
        </form>
      </div>
    )
  }
}

class Note extends Component {
  render() {
    const content = this.props.content
    return (
      //아래 내용들은 materialize에 있는 라이브러리와 클래스를 활용한 것 입니다.
      //materialize 의 grid부분을 참고해 주세요.
      <div className='col s12 m6 l3'>
        <div className='card yellow lighten-4'>
          <div className='card-content black-text'>
            {content}
          </div>
        </div>
      </div>
    )
  }
}

export default App