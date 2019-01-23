import React,{Component} from "react"
import "materialize-css"
import "materialize-css/dist/css/materialize.min.css"
import Note from "./Note"
import Writing from "./Writing"
import './note.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      savedNotes: [
        {id:0, title: "aa", content: "default1"},
        {id:1, title: "aa", content: "default2"},
        {id:2, title: "aa", content: "default3"}
      ]
    }
  }

  save = (writingState) => {
    const savedNotes = this.state.savedNotes
    const {userInputContent, userInputTitle} = writingState
    let lastNoteId = savedNotes[savedNotes.length-1].id
    this.setState({
      savedNotes: [
        ...savedNotes, 
        {id: ++lastNoteId, title: userInputTitle, content: userInputContent}
      ]
    })
  }
  
  delete = (id) => {
    const { savedNotes } = this.state
    const filteredNotes = savedNotes.filter((note) => id !== note.id )
    this.setState({
      savedNotes : filteredNotes
    })
  }

  render() {
    return (
      <div>
        <Writing save={this.save} />
        <div className='row'>
          {this.state.savedNotes.map((note, index) => (
            <Note del={this.delete} title={note.title} content={note.content} id={note.id} key={index} />
          ))}
        </div>
      </div>
    )
  }
}

export default App