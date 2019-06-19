import React, {Component} from "react"
import "./note.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //state의 초기값을 설정합니다.
      savedNotes: [{id:0,title: "default1-t", content: "default1-c"}]
    }
  }

  del = (id) => {
    console.log(id+' del')
    const {savedNotes} = this.state
    const deleteNotes = savedNotes.filter(note => note.id !== id)
    this.setState({
      savedNotes: deleteNotes
    })
  }

  save = (writingState) => {
    //설계한 함수의 상태를 확인하기 위해 save를 표시하도록 해봅시다.
    const savedNotes = this.state.savedNotes
    const savedNote = savedNotes[savedNotes.length-1]
    const lastId = savedNote.id
    this.setState({
      savedNotes: [...savedNotes,
        {id:lastId+1,title: writingState.title,content: writingState.content}
      ]
    })
    // console.log(savedNotes)
  }

  render() {
    // const savedNotes = this.state.savedNotes
    const {savedNotes} = this.state
    return (
      <div className='App'>
        <Writing save={this.save} />
        {/* 원래 노트를 여러개 보내므로, Notes라고 하는게 좋겠지만 추후에 Note 컴포넌트로 활용할 예정이기 때문에 Note로 명명해 줍시다.*/}
        { savedNotes.map(
          note => <Note del={this.del} title={note.title} content={note.content} id={note.id} key={note.id} />
          )
        }
      </div>
    )
  }
}

class Writing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false,
      title: "",
      content: ""
    }
  }

  handleClick = e => {
    this.setState({
      isClicked: true
    })
  }

  handleChange = (event) => {
    console.log("changed")
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    this.props.save(this.state)
    this.setState({
      title: "",
      content: ""
    })
    event.preventDefault();
  }

  render() {
    const showTitle = this.state.isClicked
    return (
      <form onSubmit={this.handleSubmit}>
        {showTitle && (
          <input
            type='text'
            name="title"
            onChange={this.handleChange}
          />
        )
        // do not show
        }
        <input
          type='text'
          name="content"
          onClick={this.handleClick}
          onChange={this.handleChange}
        />
        <input type='submit' />
      </form>
    )
  }
}

class Note extends Component {
  handleDelete = e => {
    this.props.del(this.props.id)
  }

  render() {
    const {id, title, content} = this.props
    return (
      //아래 내용들은 materialize에 있는 라이브러리와 클래스를 활용한 것 입니다.
      //materialize 의 grid부분을 참고해 주세요.
      <div className="Note col s12 m4 l3">
        <div onClick={this.handleDelete} className="DeleteBtn">
          <div className="DeleteBtn btn-floating btn-large">
            <i id="Icon" className="material-icons">delete</i>
          </div>
        </div>
        <div className="card yellow lighten-4">
          <div className="card-content black-text">
            <span className="card-title">
            [{id}] {title}
            </span>
            <p>{content}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App
