import React, {Component} from "react"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      //state의 초기값을 설정합니다.
      savedNotes: [{id : 0, title: "title1", content: "default1"}, {id : 1, title: "title2", content: "default2"}]
    }
  }

  save = (title, content) => {
    // 설계한 함수의 상태를 확인하기 위해 save를 표시하도록 해봅시다.
    // console.log(content + "is saved")

    const {savedNotes} = this.state
    const lastNoteIndex = savedNotes[savedNotes.length - 1].id

    this.setState({
      savedNotes : [...savedNotes, {id: lastNoteIndex + 1, title: title, content: content}]
    })
  }

  delete = (e, index) => {
    const {savedNotes} = this.state
    const filteredNotes = savedNotes.filter((note) => note.id !== index)

    this.setState({
      savedNotes : filteredNotes
    })

    e.preventDefault()
  }

  render() {
    return (
      <div className='App'>
        <Writing save={this.save} />
        {/* 원래 노트를 여러개 보내므로, Notes라고 하는게 좋겠지만 추후에 Note 컴포넌트로 활용할 예정이기 때문에 Note로 명명해 줍시다.*/}
        {
          this.state.savedNotes.map((note) => (
            <Note title={note.title} content={note.content} id={note.id} key={note.id} delete={this.delete}/>
          ))
        }
      </div>
    )
  }
}

class Writing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      content: "",
      showContent: false
    }
  }

  // handleTitleChange = (e) => {
  //   // const event = {...e}
  //   // console.log(event);

  //   this.setState({
  //     title : e.target.value
  //   })
  // }

  // handleContentChange = (e) => {
  //   // const event = {...e}
  //   // console.log(event);

  //   this.setState({
  //     content : e.target.value
  //   })
  // }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    this.props.save(this.state.title, this.state.content)
    e.preventDefault()
  }

  handleFocus = (isActive) => {
    this.setState({
      showContent : isActive
    })
  }

  render() {
    const {showContent} = this.state
    // console.log(showContent)

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          value={this.state.title}
          onFocus={() => {this.handleFocus(true)}}
          // onBlur={() => {this.handleFocus(false)}}
          onChange={this.handleChange}
        />
        { showContent && 
        <input
          type='text'
          name="content"
          value={this.state.content}
          onChange={this.handleChange}
        />
        }        
        <input type='submit' />
      </form>
    )
  }
}

class Note extends Component {
  render() {
    const { id } = this.props
    const { content } = this.props
    const { title } = this.props

    return (
      <div className="card-panel">
        <form onSubmit={(e) => this.props.delete(e, id)}>
          title : {title}, content : {content} 
          <input value="삭제" type='submit' />
        </form>        
      </div>
    )
  }
}

export default App
