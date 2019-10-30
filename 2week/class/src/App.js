import React, {Component} from "react"
import "./App.css";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import Note from "./Note.js";
import Writing from "./Writing.js";
// import Edit from "./Edit.js";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {   
      savedNotes: [
        {id:0, title: "title1", content: "default1", view:false},
        {id:1, title: "title2", content: "default2", view:true},
        {id:2, title: "title3", content: "default3", view:false}
      ]
    }
  }
  

  save = writingState => {
    const { savedNotes } = this.state; //es6문법 디스트럭처링 , 객체 구조분해할당 
    const lastNoteId = savedNotes.length != 0 ? savedNotes[savedNotes.length -1].id: 0;
    this.setState({
      savedNotes: [...savedNotes,
        {
          id: lastNoteId +1,
          title: writingState.title,
          content: writingState.content,
          view:  writingState.content,
        }
      ] //스프레드 연산자 spread operand 전개연산자 ... savedNotes를 그대로 복사 깊은복사 얕은복사
    });
    console.log("save");
  }

  

  delete = index =>{
    // console.log(index);
    const {savedNotes} = this.state
    const filteredNotes = savedNotes.filter((note)=> note.id !== index)

    this.setState({
      savedNotes: filteredNotes
    });
  };
  
  edit = index =>{
    // console.log(index);
    const {savedNotes} = this.state
    const filteredNotes = savedNotes.findIndex(note=> note.id === index);
 
    const selected= savedNotes[filteredNotes];
    const nextNotes = [...savedNotes]; 
 
    nextNotes[index] = {
      ...selected,
      view: !selected.checked 
    }
    this.setState({
       savedNotes : nextNotes
    });
  }; 

  edit2 = (writingState, index) =>{ 
    const { savedNotes } = this.state; 
    // const filteredNotes = savedNotes.findIndex(note=> note.id === index);
    // const lastNoteId = savedNotes.length != 0 ? savedNotes[savedNotes.length -1].id: 0;
    const changeArray = savedNotes.map(note => note.id === index ? ({...note, title:writingState.title, content:writingState.content}) : note);
    this.setState({
      savedNotes : changeArray
    });
  }


  render() {
    return (
      <div className='App'>
        <Writing save={this.save} />
        {/* 원래 노트를 여러개 보내므로, Notes라고 하는게 좋겠지만 추후에 Note 컴포넌트로 활용할 예정이기 때문에 Note로 명명해 줍시다.*/}
        <div className="row">
          {this.state.savedNotes.map((note, index) => (  //소괄호() 바로 return 하겠다
          <Note 
          edit={this.edit} 
          delete={this.delete} 
          edit2={this.edit2}
          title={note.title} 
          content={note.content} 
          save={this.save} 
          key={note.id} 
          index={note.id} 
          view={note.view} 
          />
        ))}
        </div>
      </div>
    )
  }
}

export default App
