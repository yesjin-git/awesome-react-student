import React, {Component} from "react";
import Writing from "./Writing";
import Note from "./Note";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savedNotes: [
        {id: 0, title: "title1", content: "default1"},
        {id: 1, title: "title2", content: "default2"},
        {id: 2, title: "title3", content: "default3"}
      ]
    }
  }

  save = (writingState) => {
    const {savedNotes} = this.state
    const lastNoteId = savedNotes.length ? savedNotes[savedNotes.length - 1].id : -1;

    this.setState({
      savedNotes: [
        ...savedNotes,
        {
          id: lastNoteId + 1,
          title: writingState.title,
          content: writingState.content
        }
      ]
    })
  }

  edit = (index, title, content) => {
    const {savedNotes} = this.state;

    this.setState({
      savedNotes: savedNotes.map(
        item => item.id === index // id 가 일치하면  
        ? ({ ...item, title: title, content: content }) // 새 객체 생성 후 기존 내용을 넣고 원하는 값 덮어씀.
        : item // 바꿀 필요 없는것들은 그냥 기존 값 사용
      )
    });
  }

  delete = (index) => {
    // console.log(`${index} will be deleted`)
    const {savedNotes} = this.state;
    
    savedNotes.splice(index, 1);

    this.setState({
      savedNotes: savedNotes
    })
  }

  render() {
    const {savedNotes} = this.state;

    return (
      <div>
        <Writing save={this.save} />
        <div className='row'>
          { savedNotes.map (
              (note, index) => (
                <Note
                  key = {note.id}
                  index = {index}
                  title = {note.title}
                  content = {note.content}
                  edit = {this.edit}
                  delete = {this.delete}
                />
              )
            )
          }
        </div>
      </div>
    )
  }
}