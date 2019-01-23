import React,{Component} from "react"
import "materialize-css"
import "materialize-css/dist/css/materialize.min.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      savedNotes: [
        {content: "default1"},
        {content: "default2"},
        {content: "default3"}
      ]
    }
  }

  save = (content) => {
    const savedNotes = this.state.savedNotes
    this.setState({
      savedNotes: [
        ...savedNotes, 
        {content: content}
      ]
    })
  }

  render() {
    return (
      <div>
        <Writing save={this.save} />
        <div className='row'>
          {this.state.savedNotes.map((note) => (
            <Note content={note.content} />
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
      content: "test"
    }
  }

  handleSubmit = (e) => {
    console.log('submitted')
    this.props.save(this.state.content)
    e.preventDefault();
  }

  handleChange = (event) => {
    console.log('userInput is ' + this.state.content)
    this.setState({
      content: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input
              type='text'
              value={this.state.content}
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