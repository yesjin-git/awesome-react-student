import React, {Component} from "react"

import Writing from "./Writing"
import Note from "./Note"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      savedNotes: [
        {id: 0, title: "title1", content: "default1", isFocused: false},
        {id: 1, title: "title2", content: "default2", isFocused: false},
        {id: 2, title: "title3", content: "default3", isFocused: false}
      ]
    }
  }

  save = (writingState) => {
    var num;
    const {savedNotes} = this.state
    if (savedNotes.length === 0) {
      num = 0
    }
    else {
      num = savedNotes.length - 1
    }
    const lastNoteId = savedNotes[num].id
    console.log(lastNoteId)
    this.setState({
      savedNotes: [
        ...savedNotes,
        {
          id: lastNoteId + 1,
          title: writingState.title,
          content: writingState.content,
          isFocused: false
        }
      ]
    })
  }

  delete = (index) => {
    console.log(`${index} will be deleted`)
    const {savedNotes} = this.state
    console.log(savedNotes.length)
    savedNotes.splice(index, 1)
    this.setState({
      savedNotes: savedNotes
    })
  }

  edit = (index) => {
    console.log(`${index} will be edited`)
    const {savedNotes} = this.state
    this.setState({
      savedNotes: savedNotes
    })
  }

  render() {
    return (
      <div>
        <Writing save={this.save} />
        <div className='row'>
          {this.state.savedNotes.map((note, index) => (
            <Note
              delete={this.delete}
              edit={this.isFocused}
              title={note.title}
              content={note.content}
              index={index}
              key={note.id}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App
