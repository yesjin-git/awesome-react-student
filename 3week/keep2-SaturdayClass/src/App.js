import React,{Component} from "react"
import "materialize-css"
import "materialize-css/dist/css/materialize.min.css"
import Note from "./Note.js"
import Writing from "./Writing.js"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      savedNotes: [
        {id: "0",title: "title1",content: "default1"},
        {id: "1",title: "title2",content: "default2"},
        {id: "2",title: "title3",content: "default3"}
      ]
    }
  }

  save = (writingState) => {
    const savedNotes = this.state.savedNotes
    let lastNoteId = savedNotes[savedNotes.length - 1].id

    this.setState({
      savedNotes: [
        ...savedNotes,
        //content 안에 userInput을 넣어야, content로 저장이 됩니다.
        {
          id: ++lastNoteId,
          title: writingState.userInputTitle,
          content: writingState.userInputContent,
        }
      ]
    })
  }

  delete = (id) => {
    console.log(`${id} will be deleted`)
    const savedNotes = this.state.savedNotes
    const deletedNote = savedNotes.splice(id,1)
    this.setState({
      savedNote: deletedNote
    })
  }

  render() {
    return (
      <div>
        <Writing save={this.save} />
        <div className='row'>
          {this.state.savedNotes.map((note,index) => (
            <Note
              delete={this.delete}
              title={note.title}
              content={note.content}
              id={index}
              key={index}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App