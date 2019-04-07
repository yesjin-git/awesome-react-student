import React, {Component} from "react"

import Writing from "./Writing"
import Note from "./Note"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      savedNotes: [
        {id: 0, title: "title1", content: "default1"},
        {id: 1, title: "title2", content: "default2"},
        {id: 2, title: "title3", content: "default3"}
      ]
    }
  }

  save = (writingState) => {
    const {savedNotes} = this.state
    const lastNoteId = savedNotes[savedNotes.length - 1].id
    this.setState({
      savedNotes: [
        ...savedNotes,
        {
          id: lastNoteId + 1,
          title: writingState.title,
          content: writingState.content
        }
      ]
    })
  }

  edit = (state) => {
    const newSatate = [...this.state.savedNotes];
    const thisNoteIndex = newSatate.findIndex((i) => i.id === state.id);
    newSatate[thisNoteIndex] = {
      id: state.id,
      title: state.title,
      content: state.content
    };
    this.setState({
      savedNotes: newSatate
    })
  }

  delete = (index) => {
    const {savedNotes} = this.state
    savedNotes.splice(index, 1)
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
              title={note.title}
              content={note.content}
              index={index}
              key={note.id}
              note_id={note.id}
              edit={this.edit}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App
