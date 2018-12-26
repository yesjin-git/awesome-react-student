import React, { Component } from 'react';
import './App.css'
import Note from './Note.js'

class NoteList extends Component {

  render() {
    return (
      <div className='NoteList row'>
        {this.props.savedNote.map(
          (note, index) => (
            // key에 넘기는 값은 props로 접근안됨.
            <Note note={note} delete={this.props.onDelete} key={index} idx={index} />
            // {this.props.setId({index})} 이런식으로 넘기면서 state를 변경해줘야되나??
          )
        )}
      </div>
    );
  }
}

export default NoteList;