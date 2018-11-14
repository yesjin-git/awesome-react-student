import React, { Component } from 'react';
import './App.css';

import WritingNote from './WritingNote.js'
import NoteList from './NoteList.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      clickState: {
        title: false,
        content: false
      },
      savedNote: [
        { id: 1, title: 'title1', content: 'defalut' },
        { id: 2, title: 'title2', content: 'default' },
        { id: 3, title: 'title3', content: 'defalut' },
        { id: 4, title: 'title4', content: 'default' },
      ]
    };
  }
  // 입력값을 event가 아닌 value로 변경해서 받아준다. 
  handleChange = (target) => {
    this.setState({ [target.name]: target.value });
  }

  // 입력하는 것도, 이밴트가 일어나게 만들어줘야 된다. 
  handleSubmit = (props) => {
    let savedNote = this.state.savedNote
    this.setState({
      savedNote: [...savedNote, { id: this.state.savedNote.length + 1, title: props.title, content: props.content }],
      title: '',
      content: ''
    })
  }

  handleDelete = (key) => {
    let savedNote = this.state.savedNote
    savedNote.splice(key - 1, 1)
    for (var i = 0; i < savedNote.length; i++) {
      savedNote[i].id = i + 1
    }
    this.setState({
      savedNote: savedNote
    })
  }

    render() {
        //  function과 => 사용하는 것을 자유자제로 할줄 알아야 한다. 
        return(
        <div>
      {/* 노트들을 작성합니다. */ }
      <WritingNote onChange={this.handleChange} onSubmit={this.handleSubmit} title={this.state.title} content={this.state.content} />
      {/* 노트들을 불러옵니다. */ }
      <NoteList onDelete={this.handleDelete} savedNote={this.state.savedNote} />
        </div>
      );
  }
}


export default App;