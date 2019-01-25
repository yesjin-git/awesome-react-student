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
        { id: 1, title: "none", content: "default2" }
      ]
    }
  }
  save = (userInput_title, userInput_content) => {
    const savedNotes = this.state.savedNotes
    this.setState({
      savedNotes: [
        ...savedNotes,
        { id: savedNotes.length, title: userInput_title, content: userInput_content }
      ]
    })
  }
  edit = (index, userInput_title, userInput_content) => {
    const savedNotes = this.state.savedNotes;
    savedNotes.map((note, index) => {
      // note에 id와 index가 같다면 그것을 지우자
      if (note.id === index) {     
        // if id가 index랑 같으면 노트의 title과 content를 바꿔라
        this.title = this.userInput_title,
        this.content = this.userInput_content
      }
      return note
      this.setState({
        savedNotes: [{
          title: userInput_title, content: userInput_content
        }]
      })
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