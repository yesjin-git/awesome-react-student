import React, { Component } from 'react';
import './App.css'
import Note from './Note.js'

class NoteList extends Component {

  render() {
    return (
      <div className='NoteList row'>
        {this.props.savedNote.map(
          (note) => (
            <Note note={note} onDelete={this.props.onDelete} key={note.id} />
          ))
        }
      </div>
    );
  }
}

export default NoteList;