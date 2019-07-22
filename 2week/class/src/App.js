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
                  ],
      maxid:1,
      isFocused:'',
    }
  }
  focus = (id) => {
    // console.log(id)
    this.setState({
      isFocused: id,
    })
  }
  save = (title, content) => {
    const {savedNotes} = this.state
    const noteId = this.state.maxid+1
    console.log(noteId + " and " +  title + " and " + content + " is saved")
    this.setState({
      savedNotes:[
        ...savedNotes,
        {id: noteId, title: title, content: content}
      ],
      maxid:noteId
    })
  }
  update = (id, title, content) => {
    console.log(id + " and " +  title + " and " + content + " is updated")
    const {savedNotes} = this.state
    savedNotes.map(n =>{
      if (n.id === id){
        return (n.title=title, n.content=content)
      }else{
        return n
      }
    })
    this.setState({
      savedNotes:savedNotes
    })
  }

  delete = (id) => {
    console.log(id + " is deleted")
    const {savedNotes} = this.state
    const filteredNotes = savedNotes.filter(n=> n.id !== id)
    // let cnt = 0
    // filteredNotes.map(n=>n.id = cnt++)
    this.setState({
      savedNotes:filteredNotes
    })
  }

  render() {
    console.log(this.state.savedNotes)
    return (
      <div className='App'>
        <Writing isFocused={this.state.isFocused} save={this.save} focus={this.focus}/>
        {this.state.savedNotes.map((note)=>(
            <Note id={note.id} key={note.id} 
            title={note.title} content={note.content} isFocused={this.state.isFocused}
            delete={this.delete} update={this.update} focus={this.focus}/>
        ))}
      </div>
    )
  }
}
export default App