import React, {Component} from "react"
import Writing from './Writing.js'
import Note from './Note.js'

class App extends Component {
  // App component 데이터를 맞춰서 수정한다.
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

  delete = (index) => {
    // template literal을 한번 더 활용한다.
    console.log(`${index}note + will be deleted`)

    const {savedNotes} = this.state
    savedNotes.splice(index, 1)
    
    this.setState({
      savedNotes: savedNotes
    })
  }

  // Note Component에 props로 title을 내려준다.
  // key에는 index를 지우고, Note들의 id 값을 넣어 준다.
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
              key={note.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default App