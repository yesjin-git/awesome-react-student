import React, { Component } from 'react';
import './App.css';

import Writing from './Writing.js'
import NoteList from './NoteList.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedNote: [
        { id: '0', title: 'title1', content: 'defalut' },
        { id: '1', title: 'title2', content: 'default' },
        { id: '2', title: 'title3', content: 'defalut' },
        { id: '3', title: 'title4', content: 'default' },
      ]
    };
  }

  // 입력하는 것도, 이밴트가 일어나게 만들어줘야 된다. 
  // id는 생성할 때 반드시 유일한 값으로 설정해줘야 한다. 공식문서에서는 npm shorid라는 걸 활용하라고 나오는데.. 너무 무거워지는 모양새이므로 생략..
  save = (note) => {
    let savedNote = this.state.savedNote
    this.setState({
      savedNote: [...savedNote, { id: this.state.savedNote.length, title: note.title, content: note.content }],
      title: '',
      content: ''
    })
  }

  handleDelete = (index) => {
    let savedNote = this.state.savedNote
    savedNote.splice(index, 1)
    this.setState({
      savedNote: savedNote
    })
  }

    render() {
        //  function과 => 사용하는 것을 자유자제로 할줄 알아야 한다. 
        return(
        <div>
      {/* 노트들을 작성합니다. */ }
      <Writing change={this.handleChange} save={this.save} title={this.state.title} content={this.state.content} />
      {/* 노트들을 불러옵니다. */ }
      <NoteList delete={this.handleDelete} savedNote={this.state.savedNote} />
        </div>
      );
  }
}


export default App;