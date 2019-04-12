import React, {Component} from "react";
import Note from './components/Note';
import Writing from './components/Writing';
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //state의 초기값을 설정합니다.
      savedNotes: [{id: 0, title: "title1", content: "default1"}, {id: 1, title:"title2", content: "default2"}]
    }
    
  }

  save = (writing) => {

    const {savedNotes} = this.state;

    
    if(savedNotes.length > 0) {
      const lastNoteId = savedNotes[savedNotes.length - 1].id;
      this.setState({savedNotes: [ ...savedNotes, {id: lastNoteId+1, title: writing.title, content: writing.content}]});
    } else {
      this.setState({savedNotes: [ ...savedNotes, {id: 0, title: writing.title, content: writing.content}]});
    }
    
    
  }

  
  delete = (id) => {
    const {savedNotes} = this.state;
    const filteredNotes = savedNotes.filter(note => note.id !== id);

    this.setState({savedNotes: filteredNotes});
  }

  modify = (id, writing) => {
    const {savedNotes} = this.state;
    const modifiedNotes = savedNotes.map(note => {
      if(note.id === id) {
        note.title = writing.title;
        note.content = writing.content;
        return note;
      } else return note;
    })

    this.setState({savedNotes: modifiedNotes});
    
  }


  render() {
    const {savedNotes} = this.state;

    return (
      <div className='App'>

          <Writing save={this.save} />
        
       
        <div className="row">
          {savedNotes.map((note) => (
            <Note key={note.id} content={note.content} title={note.title} delete={this.delete} id={note.id} modify={this.modify}/>
          ))}
        </div>
        

      </div>
    )
  }
}


export default App
