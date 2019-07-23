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
      activatedId:'',
    }
  }
  save = (title, content) => {
    const {savedNotes} = this.state
    const noteId = this.state.maxid+1
    // console.log(noteId + " and " +  title + " and " + content + " is saved")
    this.setState({
      savedNotes:[
        ...savedNotes,
        {id: noteId, title: title, content: content}
      ],
      maxid:noteId
    })
  }
  update = (id, title, content) => {
    // console.log(id + " and " +  title + " and " + content + " is updated")
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
    // console.log(id + " is deleted")
    const {savedNotes} = this.state
    const filteredNotes = savedNotes.filter(n=> n.id !== id)
    this.setState({
      savedNotes:filteredNotes
    })
  }

  render() {
    // console.log(this.state.activatedId)
    return (
      <div className='App' style={{border:'solid blue', height:'100%', minHeight:'100vh'}} onClick={this.handleClick}>
        <Writing save={this.save} />
        {this.state.savedNotes.map((note)=>(
            <Note id={note.id} key={note.id} title={note.title} content={note.content} 
            delete={this.delete} update={this.update} activatedId={this.state.activatedId}/>
        ))}
      </div>
    )
  }
  handleClick =(e) =>{
    if (e.target.className==="App") {
      this.setState({
        activatedId:'',
      })
    }
    if (!e.target.id){
      // console.log(e.target.parentElement.id)
      this.setState({
        activatedId: e.target.parentElement.id
      })
    }
    else{
      // console.log(e.target.id)
      this.setState({
        activatedId: e.target.id
      })
    }
    // console.log(e.target)
  }
}
export default App