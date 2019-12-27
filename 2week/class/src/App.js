import React, {Component} from "react"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //state의 초기값을 설정합니다.
      savedNotes: [
        {id : 0, title: "test1", content: "default1"}, 
        {id : 1, title: "test2", content: "default2"}]
    }
  }

  save = (inputTitle, inputContent) => {
    //설계한 함수의 상태를 확인하기 위해 save를 표시하도록 해봅시다.
    //console.log(input + "is saved")

    const {savedNotes} = this.state         // state 에 있는 savedNotes 를 저장하는 변수
    //const savedNotes = this.state.savedNotes 윗줄이랑 동일한 의미
    const lastNoteId = savedNotes[savedNotes.length -1].id
    if (savedNotes.length == 0) {
      lastNoteId = 0
    } else {

    }
    this.setState({
      savedNotes : [
        ...savedNotes,      // ... : 여러 개 있는 거를 풀어헤친다 라는 뜻, 대괄호를 없앤다.
        {id : lastNoteId + 1, title : inputTitle, content : inputContent }  // key = value 라는 뜻
      ]                     // savedNotes 랑 input 을 합친다
    })
  }

  delete = (id) => {
    const {savedNotes} = this.state
    const deletedNotes = savedNotes.filter((note, index) => note.id !== id)
    console.log("delete")
    this.setState({
      savedNotes : [...deletedNotes]
    })
  }

  render() {
    return (
      <div className='App'>
        <Writing save={this.save} />
        {/* 원래 노트를 여러개 보내므로, Notes라고 하는게 좋겠지만 추후에 Note 컴포넌트로 활용할 예정이기 때문에 Note로 명명해 줍시다.*/}
        {
          this.state.savedNotes.map((note, index) => (
            <Note title = {note.title} 
            content = {note.content} 
            del = {this.delete} 
            id = {note.id}
            key = {note.id} />
          ))
        }
        {/* <Note content={this.state.savedNotes.map((note, index) => note.content)} /> */}
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
      showTitle: false
    }
  }

  handleChange = (e) => {
    console.log("changed")
    this.setState({
      [e.target.name] : e.target.value
    })
    //console.log(e)        // e를 바로 초기화시켜버려서 target 을 볼 수 없음
    //console.log({...e})   // e를 초기화시키지 않아서 target 을 볼 수 있음
  }

  handleSubmit = (e) => {
    this.props.save(this.state.title, this.state.content)
    e.preventDefault()
  }

  handleContentFocus = (e) => {
    this.setState({
      showTitle : true
    })
  }

  render() {
    const {showTitle} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        {
          showTitle ? (
            <input
              type='text'
              name='title'
              value={this.state.title}
              onChange={this.handleChange}
        />
          ): (<></>)
        }
        <input
          type='text'
          name='content'
          value={this.state.content}
          onFocus={this.handleContentFocus}
          onChange={this.handleChange}
        />
        <input type='submit' />
      </form>
    )
  }
}

class Note extends Component {
  handleDelete = (e) => {
    this.props.del (this.props.id)
  }
  render() {
    const { id, title, content } = this.props

    return (
      <div className="Note col s12 m4 l3">
        <div className="DeleteBtn">
          <div 
          onClick={this.handleDelete}
          className="DeleteBtn btn-floating btn-large">
            <i id="Icon" className="material-icons">delete</i>
          </div>
        </div>
        <div className="card yellow lighten-4">
          <div className="card-content black-text">
            <span className="card-title">
              {title}
            </span>
            <p>{content}</p>
          </div>
          </div>
        </div>
    )
  }
}

export default App
