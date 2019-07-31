import React, {Component} from "react"
import "./note.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //state의 초기값을 설정합니다.
      savedNotes: [{id:0, title: "default1-t", content: "default1-c"}]
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

  update = (clickedNoteState, clickedNoteId) => {
    console.log(clickedNoteId+' update'+clickedNoteState.title+'/'+clickedNoteState.content)
    const {savedNotes} = this.state
    const savedNote = savedNotes[clickedNoteId]
    savedNote.title = clickedNoteState.title
    savedNote.content = clickedNoteState.content
    console.log(savedNotes[clickedNoteId])
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
          note => <Note del={this.del} update={this.update} title={note.title} content={note.content} id={note.id} key={note.id} />
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
    // const showTitle = this.state.isClicked
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name="title"
          onChange={this.handleChange}
          placeholder="제목"
        />
        <input
          type='text'
          name="content"
          onChange={this.handleChange}
          placeholder="내용"
        />
        <input type='submit' />
      </form>
    )
  }
}

class Note extends Component {
  state = {
    isNoteClicked: false,
    title: this.props.title,
    content: this.props.content,
  }
  handleDelete = e => {
    this.props.del(this.props.id)
  }
  handleUpdate = e => {
    this.props.update(this.props.id)
  }

  handleNoteClick = e =>{
    this.setState({
        isNoteClicked: true
    })
  }
  handleChange = (event) => {
    // console.log("changed")
    // console.log(event.target.name)
    // console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
    // console.dir(this.state)
  }
  handleSubmit = (event) => {
    this.setState({
      isNoteClicked: false
    })
    this.props.update(this.state, this.props.id)
    // console.log(this.props.savedNotes[0])
  }



  //과제 : 노트가 눌렸을 때, 수정상태가 되고(기본 값은 원래 있던 노트의 값, 인풋 두개랑 제출) 유저가 입력을 하면 값이 변한다. 그리고 제출버튼을 누르면 노트에 저장되어 있던 값이 업데이트 된다.

  //1. 노트가 눌렸을 때 수정ㅇ상태가 되어 default... 완료
  //2. 값이 변한다. 

  //3. 제출버튼을 누르면 값이 업데이트 된다. 
  //? 어느 값을 업데이트? 노트의 타이틀과 컨탠트를 업데이트한다. 


  //? 앱의 노트에도 업데이트를 해야되나?
  

  render() {
    const {id, title, content} = this.props
    const {isNoteClicked }=this.state
    console.log(title)
       return (
      //아래 내용들은 materialize에 있는 라이브러리와 클래스를 활용한 것 입니다.
      //materialize 의 grid부분을 참고해 주세요.
      <div className="Note col s12 m4 l3" onClick={this.handleNoteClick}>
        <div onClick={this.handleDelete} className="DeleteBtn">
          <div className="DeleteBtn btn-floating btn-large">
            <i id="Icon" className="material-icons">delete</i>
          </div>
        </div>
        <div className="card yellow lighten-4">
          <div className="card-content black-text">
            
            {isNoteClicked ? (
              <form onSubmit={this.handleSubmit} >
                <input
                    type='text'
                    name="title"
                    defaultValue={this.state.title}
                    onChange={this.handleChange}
                  />
                <input
                  type='text'
                  name="content"
                  defaultValue={this.state.content}
                  onChange={this.handleChange}
                />
                <input type='submit' />
              </form>
              ) : (
              <div>
                <span className="card-title">[{id}] {this.state.title}</span>
                <p>{this.state.content}</p>
              </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App
