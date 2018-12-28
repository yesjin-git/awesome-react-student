import React,{Component} from "react"
import "materialize-css"
import "materialize-css/dist/css/materialize.min.css"

import Writing from './Writing.js'
import Note from './Note.js'
import './App.css'

class App extends Component {
  constructor(props) {
    //constructor를 직접 쓰려면, 반드시 super를 써야 한다. super에서 props를 인자로 갖으므로, constructor를 쓸때 props를 써줘야 한다.
    super(props)
    //state 초기값을 설정한다.
    this.state = {
      savedNotes: [
        //편의를 위해 content 라는 key값을 줘보겠습니다.
        // {} 안에는 key: value 형태로 값을 지정해 줄 수 있습니다.
        //
        {id: 0, title: "aa",content: "default1"},
        {id: 1, title: "aa",content: "default2"},
        {id: 2, title: "aa",content: "default3"}
      ]
    }
  }

  save = (writingState) => {
    const savedNotes = this.state.savedNotes
    let lastNoteId = savedNotes[savedNotes.length-1].id
    
    this.setState({
      savedNotes: [
        ...savedNotes,
        {id: ++lastNoteId,title: writingState.userInputTitle,content: writingState.userInputContent}
      ]
    })
  }

  delete = (index) => {
    console.log(`${index}th note + will be deleted`)
    const savedNote = this.state.savedNotes
    const deletedNote = savedNote.splice(index,1)
    this.setState({
      savedNote: deletedNote
    })
  }

  render() {
    return (
      <div>
        <Writing save={this.save} />
        <div className='row'>
          {this.state.savedNotes.map((note,index) => {
            // let savedNotes = this.state.savedNotes;
            // savedNotes[index].id = index;
            // this.setState(savedNotes);
            return (
              <Note
                delete={this.delete}
                title={note.title}
                content={note.content}
                id={index}
                key={note.id}
              />
            )
          }
          )}
        </div>
      </div>
    )
  }
}



export default App