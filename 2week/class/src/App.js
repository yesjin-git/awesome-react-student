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
      activatedId:undefined,
    }
  }
  save = (title, content) => {
    const {savedNotes} = this.state
    const noteId = this.state.maxid+1
    this.setState({
      savedNotes:[
        ...savedNotes,
        {id: noteId, title: title, content: content}
      ],
      maxid:noteId,
      activatedId:undefined,
    })
  }
  update = (id, title, content) => {
    const {savedNotes} = this.state
    savedNotes.map(n =>{
      if (n.id === id){
        return (n.title=title, n.content=content)
      }else{
        return n
      }
    })
    this.setState({
      savedNotes,
      activatedId:undefined,
    })
  }

  delete = (id) => {
    const {savedNotes} = this.state
    const filteredNotes = savedNotes.filter(n=> n.id !== id)
    this.setState({
      savedNotes:filteredNotes
    })
  }

  render() {
    return (
      <div className='App' style={{border:'solid blue', height:'100%', minHeight:'100vh'}} onClick={this.handleClick}>
        <Writing save={this.save} activatedId={this.state.activatedId}/>
        {this.state.savedNotes.map((note)=>(
            <Note id={note.id} key={note.id} title={note.title} content={note.content} 
            delete={this.delete} update={this.update} activatedId={this.state.activatedId}/>
        ))}
      </div>
    )
  }
  handleClick =(e) =>{
    if (!e.target.id){
      this.setState({
        activatedId: e.target.parentElement.id
      })
    }
    else {
      this.setState({
        activatedId: e.target.id
      })
    }
  }
}
export default App