import React, {Component} from "react"
import Writing from './writing.js'
import Note from './note.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //state의 초기값을 설정합니다.
      savedNotes: [{id:0, title : "title1", content: "default1"}, {id:1, title : "title2", content: "default2"}]
    }
  }

  save = (state) => {
    //설계한 함수의 상태를 확인하기 위해 save를 표시하도록 해봅시다.
    const {savedNotes} = this.state
    const lastNoteId = savedNotes[savedNotes.length-1].id+1
    this.setState(
      {
        savedNotes:[...savedNotes,{
          id:lastNoteId+1,
          title:state.title,
          content:state.content
        }]//기존의거를 훼손하지않고 새로만들어서넣어주는것
      }//아이디를 새로 부여해준다. 마지막꺼 갯수를 세서..
    )
  }

  delete = (id) => {
    console.log(id+'지울거임')
    
  }

  render() {
    const {savedNotes} = this.state
    return (
      <div className='App'>
        <Writing save={this.save} />
        {/* 원래 노트를 여러개 보내므로, Notes라고 하는게 좋겠지만 추후에 Note 컴포넌트로 활용할 예정이기 때문에 Note로 명명해 줍시다.*/}
        {savedNotes.map((note) => (
          <Note 
            del={this.delete}
            title={note.title}
            content={note.content}        
            id={note.id}
            key={note.id}

          />
        ))}
      </div>
    )
  }
}




export default App
