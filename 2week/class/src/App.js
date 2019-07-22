import React, {Component} from "react"
import Writing from './Writing.js'
import Note from './Note.js'
import "materialize-css"
import "materialize-css/dist/css/materialize.min.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //state의 초기값을 설정합니다.
      savedNotes: [ {id: 0, title: "title1", content: "default1"}, 
                    {id: 1, title: "title2", content: "default2"}
                  ]
    }
  }

  save = (title, content) => {
    //설계한 함수의 상태를 확인하기 위해 save를 표시하도록 해봅시다.
    console.log(title + " and " + content + " is soaved")
    const {savedNotes} = this.state
    const noteId = savedNotes.length
    this.setState({
      savedNotes:[
        ...savedNotes,
        {id: noteId, title: title, content: content}
      ]
    })
  }
  delete = (id) => {
    // console.log(id)
    const {savedNotes} = this.state
    const filteredNotes = savedNotes.filter((n) => n.id !== id)
    // let cnt = 0;
    filteredNotes.map((n, index) => n.id = index) 
    // console.log(filteredNotes)
    this.setState({
      savedNotes:filteredNotes
    })
  }

  render() {
    console.log(this.state.savedNotes)
    return (
      <div className='App'>
        <Writing save={this.save} />
        {this.state.savedNotes.map((note, index)=>(
          <Note id={note.id} title={note.title} content={note.content} delete={this.delete} key={index}/>
        ))}
      </div>
    )
  }
}
export default App