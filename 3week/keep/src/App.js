import React, { Component } from 'react';
import './App.css';

import WritingNote from './WritingNote.js'
import NoteList from './NoteList.js'
// 함수형 컴포넌트 생성.

class App extends Component {
  constructor(props) {
    //constructor를 직접 쓰려면, 반드시 super를 써야 한다. super에서 props를 인자로 갖으므로, constructor를 쓸때 props를 써줘야 한다. 
    super(props);
    //state 초기값을 설정한다.
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

    // 특정 조건에 따라 불러오는 것은 render에 넣으면 안됨, render는 state가 변환될 때 마다 무조건 불러와지는 것. 이므로 비효율이 발생한다.  
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