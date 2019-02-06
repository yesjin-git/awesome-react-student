import React,{ Component } from "react";
import Writing from "./Writing";
import Note from "./Note";
import "materialize-css"
import "materialize-css/dist/css/materialize.min.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      savedNotes: [
        {
          id: 0,
          title: 'aa',
          content: "default1"
        },
        { 
          id: 1,
          title: 'aa',
          content: "default2"
        },
        { 
          id: 2,
          title: 'aa',
          content: "default3"
        }
      ]
    }
  }

  save = (writingState) => {
    const { savedNotes } = this.state;
    let lastId = savedNotes[savedNotes.length -1].id;
    this.setState({
      savedNotes: [
        ...savedNotes, 
        {id: ++lastId, title: writingState.writeTitle, content: writingState.writeContent}
      ]
    })
  }

  delete = (noteId) => {
    console.log(`Id:${noteId} will be deleted`);
    const { savedNotes } = this.state;
    const deletedNotes = savedNotes.filter(note => note.id !== noteId);
    this.setState({
      savedNotes: deletedNotes
    });
  }

  edit = (noteId, editNote) => {
    console.log(`Id:${noteId} will be edited`);
    console.log(editNote);
    const { savedNotes } = this.state;
    const editedNote = savedNotes.map((note) => {
        if(note.id === noteId){          
          note.title = editNote.editTitle;
          note.content = editNote.editContent;
        }
        return note;
    });
    this.setState({
      savedNotes: editedNote
    });
    
  }

  render() {
    return (
      <div>
        <Writing save={this.save} />
        <div className='row'>
          {this.state.savedNotes.map((note) => (            
            <Note title={note.title} content={note.content} key={note.id} id={note.id} delete={this.delete} edit={this.edit}/>
          )
          )}
        </div>
      </div>
    )
  }
}





export default App