import React,{Component} from "react"
import "materialize-css"
import "materialize-css/dist/css/materialize.min.css"

import Writing from './Writing.js'
import Note from './Note.js'

class App extends Component {
  constructor(props) {
    //constructor를 직접 쓰려면, 반드시 super를 써야 한다. super에서 props를 인자로 갖으므로, constructor를 쓸때 props를 써줘야 한다.
    super(props)
    //state 초기값을 설정한다.
    this.state = {
      savedNotes: [
        //편의를 위해 content 라는 key값을 줘보겠습니다.
        // {} 안에는 key: value 형태로 값을 지정해 줄 수 있습니다.
        //
        { title: "aa", content: "default1"},
        { title: "aa", content: "default2"},
        { title: "aa", content: "default3"}
      ]
    }
  }

  handleSubmit = (writingState) => {
    const savedNotes = this.state.savedNotes
    console.log(writingState)
    this.setState({
      savedNotes: [
        ...savedNotes, 
        {title: writingState.userInputTitle, content: writingState.userInputContent}
      ]
    })
  }

  render() {
    return (
      <div>
        <Writing submit={this.handleSubmit} />
        <div className='row'>
          {this.state.savedNotes.map((note, index) => (
            <Note
              title={note.title}
              content={note.content}
              key={index} 
            />
          ))}
        </div>
      </div>
    )
  }
}



export default App