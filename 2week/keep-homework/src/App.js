import React,{Component} from "react"
import "materialize-css"
import "materialize-css/dist/css/materialize.min.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      savedNotes: [
        {id:1,
        title: "title1",
        content: "default1"},
        {id:2,
        title: "title2",
        content: "default2"},
        {id:3,
        title: "title3",
        content: "default3"}
      ]
    }
  }

  save = (userInputTitle, userInputContent) => {
    const savedNotes = this.state.savedNotes
    this.setState({
      savedNotes: [
        ...savedNotes, 
        {title: userInputTitle, content: userInputContent}
      ]
    
    })
  }

  render() {
    return (
      <div>
        <Writing save={this.save} />
        <div className='row'>
          {this.state.savedNotes.map((note) => (
            <Note content={note.content}
                  title={note.title}
                  key={note.id}/>
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
      userInputTitle: "title",
      userInputContent: "content"

    }
  }

  handleSubmit = (e) => {
    console.log('submitted')
    this.props.save(this.state.userInputTitle, this.state.userInputContent)
    this.setState({
      userInputTitle:'',
      userInputContent:''
    })
    e.preventDefault();
  }

  handleChangeTitle = (event) => {
    console.log('userInputTitle is ' + this.state.userInputTitle)
    this.setState({
      userInputTitle: event.target.value
    })
  }

  handleChangeContent = (event) => {
    console.log('userInputContent is' + this.state.userInputContent)
    this.setState({
      userInputContent: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input
              type='text'
              value={this.state.userInputTitle}
              onChange={this.handleChangeTitle}
            />
            <input
              type='text'
              value={this.state.userInputContent}
              onChange={this.handleChangeContent}
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
    const title = this.props.title
    return (
      //아래 내용들은 materialize에 있는 라이브러리와 클래스를 활용한 것 입니다.
      //materialize 의 grid부분을 참고해 주세요.
      <div className='col s12 m6 l3'>
        <div className='card yellow lighten-4'>
          <div className='card-content black-text'>
            {title}
            <br></br>
            {content}
          </div>
        </div>
      </div>
    )
  }
}

export default App