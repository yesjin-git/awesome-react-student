import React, {Component} from "react"
import Writing from './Writing.js'
import Note from './Note.js'
import "materialize-css"
import "materialize-css/dist/css/materialize.min.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      savedNotes: [ {id: 0, title: "title1", content: "default1"}, 
                    {id: 1, title: "title2", content: "default2"}
                  ]
    }
  }

  save = (title, content) => {
    const {savedNotes} = this.state
    const noteId = savedNotes.length
    console.log(noteId + " and " +  title + " and " + content + " is saved")
    this.setState({
      savedNotes:[
        ...savedNotes,
        {id: noteId, title: title, content: content}
      ]
    })
  }
  update = (id, title, content) => {
    console.log(id + " and " +  title + " and " + content + " is updated")
    const {savedNotes} = this.state
    const updatedNotes = savedNotes.map(n =>{
      if (n.id === id){
        return (n.title=title, n.content=content)
      }else{
        return n
      }
    })
    this.setState({
      savedNotes:updatedNotes
    })
  }

  delete = (id) => {
    console.log(id + " is deleted")
    const {savedNotes} = this.state
    const filteredNotes = savedNotes.filter((n) => n.id !== id)
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
          <Note id={index} title={note.title} content={note.content} 
          delete={this.delete} key={index} update={this.update}/>
        ))}
      </div>
    )
  }
}
export default App