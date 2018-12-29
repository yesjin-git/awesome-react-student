import React,{Component} from "react"
import "materialize-css"
import "materialize-css/dist/css/materialize.min.css"

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
        {content: "default1"},
        {content: "default2"},
        {content: "default3"}
      ]
    }
  }

  handleSubmit = (userInput) => {
    const savedNotes = this.state.savedNotes
    this.setState({
      savedNotes: [
        ...savedNotes, 
        //content 안에 userInput을 넣어야, content로 저장이 됩니다.
        {content: userInput}
      ]
    })
  }

  render() {
    return (
      <div>
      {/* //수업시간에는 save로 했었는데, submit이 더 의미론적인(바로 알아보기 편한)
      //표현이므로 submit으로 모두 바꿨습니다. */}
        <Writing submit={this.handleSubmit} />
        <div className='row'>
          {/* //실습시간에는 map 내부에 return을 넣어서 저장했습니다.
          //이는 함수를 설정할 때 (note) => {}형태로 만들었기 때문에 새로운 scope가 생겼고,
          //새로운 scope가 생겼을 경우에는 return을 통해 반환 값을 설정해 줘야 map이 작동합니다.
					//지금은 조금 어려울 수 있는 내용이니, 일단 {}형태로 함수를 선언하면 return이 필요하고
					//아닐 경우에는 안넣어도 된다고 이해하고 넘어갑시다. */}
          {this.state.savedNotes.map((note) => (
            <Note content={note.content} />
          ))}
        </div>
      </div>
    )
  }
}

class Writing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: "test"
    }
  }

  handleSubmit = (e) => {
    console.log('submitted')
    this.props.submit(this.state.userInput)
    e.preventDefault();
  }

  handleChange = (event) => {
    console.log('userInput is ' + this.state.userInput)
    this.setState({
      userInput: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input
              type='text'
              value={this.state.userInput}
              onChange={this.handleChange}
            />
          </div>
          <input
            type='submit'
            value='Submit'
          />
        </form>
      </div>
    )
  }
}

class Note extends Component {
  render() {
    const content = this.props.content
    return (
      //아래 내용들은 materialize에 있는 라이브러리와 클래스를 활용한 것 입니다.
      //materialize 의 grid부분을 참고해 주세요.
      <div className='col s12 m6 l3'>
        <div className='card yellow lighten-4'>
          <div className='card-content black-text'>
            {content}
          </div>
        </div>
      </div>
    )
  }
}

export default App