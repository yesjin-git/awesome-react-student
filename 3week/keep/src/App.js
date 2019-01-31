import Writing from "./Writing.js"
import Note from "./Note.js"

import React, { Component } from "react"
import "materialize-css"
import "materialize-css/dist/css/materialize.min.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      savedNotes: [
        { id: 0, title: "none", content: "default1" },
        { id: 1, title: "none", content: "default2" },
      ]
    }
  }
  save = (writingState) => {
    const {savedNotes} = this.state
    const lastNoteId = savedNotes[savedNotes.length - 1].id
    this.setState({
      savedNotes: [
        ...savedNotes,
        { id: lastNoteId+1, title: writingState.userInput_title, content: writingState.userInput_content }
      ]//savedNotes.length값이 id에 넣어도 된다.
    })
  }
  edit = (_index_id, _title, _content) => {
    const savedNotes = this.state.savedNotes;
    savedNotes.map((note, index) => {
      // note에 id와 index가 같다면 그것을 지우자
      if (note.id === index) {     
        // if id가 index랑 같으면 노트의 title과 content를 바꿔라
        note.id = _index_id
        note.title = _title
        note.content = _content
      }
      this.setState({
        [savedNotes]: savedNotes
      })
      return note
    })
  }
  delete = (id) => {
    const savedNotes = this.state.savedNotes;
    savedNotes.splice(id, 1)
    this.setState({
      savedNotes: savedNotes
    })
  }
  render() {
    return (
      <div>
        <Writing save={this.save} />
        <div className='row'>
          {this.state.savedNotes.map((note, idx) => (
            <Note
              del={this.delete}
              //id={note.id} 
              id={idx}
              title={note.title}
              content={note.content}
              key={idx}
              edit={this.edit}
              save={this.save}
            />
          ))}
        </div>
      </div >
    )
  }
}

export default App