import React,{Component} from "react"
import "materialize-css"
import "materialize-css/dist/css/materialize.min.css"

class App extends Component {
  constructor(props) {
    //constructor를 직접 쓰려면, 반드시 super를 써야 한다. super에서 props를 인자로 갖으므로, constructor를 쓸때 props를 써줘야 한다.
    super(props)

    //state 초기값을 설정한다.
    this.state = {
      savedNotes: [
        {content: "default1"},
        {content: "default2"},
        {content: "default3"}
      ]
    }
  }

  handleSubmit = (userInput) => {
    const savedNotes = this.state.savedNotes
    this.setState({
      savedNotes: [
        ...savedNotes, 
        {content: userInput}
      ]
    })
  }

  render() {
    return (
      <div>
        <Writing submit={this.handleSubmit} />
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
