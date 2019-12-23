import React, {Component} from "react"
import Note from "./Note.js";
import Writing from "./Writing.js";
import "./App.css";
import "./Note.css";
// import "materialize-css";
import "materialize-css/dist/css/materialize.min.css"; //css경우 경로를 일일이 써줘야 함


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //state의 초기값을 설정합니다.
      savedNotes: [
        {id: 0, title: "title1", content: "default1", view: true}, 
        {id: 1, title: "title1", content: "default2", view: false},
        {id: 2, title: "title1", content: "default3", view: true}
    ] //(2019.10.26)모든 데이터를 saveNotes 에 저장된다
    }
  }
  // {view ? (true) : (false) }
  save = WritingState => {
    //설계한 함수의 상태를 확인하기 위해 save를 표시하도록 해봅시다.

    const {savedNotes} = this.state;
    console.log(savedNotes);
    const lastNoteId = savedNotes.length !=0 ? savedNotes[savedNotes.length - 1].id: 0;
    this.setState({
      // (2019.10.26) spread operand
      // (2019.10.26) 전개연산자 [...savedNotes, {추가하고싶은 데이터}}] savedNotes안으로 추가하고싶은 데이터가 추가된다
      // savedNotes: [...savedNotes, { content: content }]
      savedNotes: [
        ...savedNotes,
        {
          id: lastNoteId + 1,
          title: WritingState.title,
          content: WritingState.content
        }
      ]
      
    });
  }
 
  delete = (index) => {
    console.log(index);
    const {savedNotes} = this.state;
    const filteredNotes = savedNotes.filter(note => note.id !== index);
    this.setState({
      savedNotes: filteredNotes
    });
  }
  render() {
    return (
      <div className='App'>
        <Writing save={this.save} />
        {/* 원래 노트를 여러개 보내므로, Notes라고 하는게 좋겠지만 추후에 Note 컴포넌트로 활용할 예정이기 때문에 Note로 명명해 줍시다.*/}
        <div className="row">
        {this.state.savedNotes.map((note, index) => (
            // <Note content={note.content} key={index} /> // 자바스크립트에서 () 소괄호는 바로 리턴을 의미, 노트들을 배열로 만들어 뿌려준다
            <Note
              delete={this.delete}
              title={note.title}
              content={note.content}
              view={note.view}
              key={note.id} 
              index={note.id}
            />
        ))}
        </div>
        
      </div>
    );
  }
}





export default App
