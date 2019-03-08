import React,{Component} from "react"
import "materialize-css"
import "materialize-css/dist/css/materialize.min.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      savedNotes: [
        {id : '1', title : "title1", content: "default1"},
        {id : '2', title : "title2", content: "default2"},
        {id : '3', title : "title3", content: "default3"}
      ]
    }
  }

  save = (id, title, content) => {
    const savedNotes = this.state.savedNotes
    const lastNoteIndex = savedNotes[savedNotes.length - 1].id

    this.setState({
      savedNotes: [
        ...savedNotes, 
        {id: lastNoteIndex + 1, title: title, content: content}
      ]
    })
  }

  render() {
    return (
      <div>
        <Writing save={this.save} />
        <div className='row'>
          {this.state.savedNotes.map((note) => (
            <Note key={note.id} id={note.id} title={note.title} content={note.content} />
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
      title: "Title",
      content: "Take a note"
    }
  }

  handleSubmit = (e) => {
    // console.log('submitted')
    this.props.save(this.state.id, this.state.title, this.state.content)
    e.preventDefault();

    this.setState({
      title: "",
      content: ""
    })
  }

  handleChange = (event) => {
    // console.log('userInput is ' + this.state.content)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input
              type='text'
              value={this.state.title}
              onChange={this.handleChange}
            />
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
    const {title} = this.props
    const {content} = this.props
    
    return (
      //아래 내용들은 materialize에 있는 라이브러리와 클래스를 활용한 것 입니다.
      //materialize 의 grid부분을 참고해 주세요.
      <div className='col s12 m6 l3'>
        <div className='card yellow lighten-4'>
          <div className='card-content black-text'>
            {title}
          </div>
          <div className='card-content black-text'>
            {content}
          </div>
        </div>
      </div>
    )
  }
}

export default App