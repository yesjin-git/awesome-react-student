import React, { Component } from "react"
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //state의 초기값을 설정합니다.
      content: ["default1"]
    }
  }
  save = (note) => {
    //실제 save를 해주자.(설계한 함수의 상태를 확인하기 위해 save를 표시하도록 해봅시다.)
    const content = this.state.content
    this.setState({
      content: [
        ...content, note
      ]
    })
  }
  render() {
    return (
      <div className='App'>
        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
          <i className="material-icons right">send</i>
        </button>
        <Writing save={this.save} />
        {/* 원래 노트를 여러개 보내므로, Notes라고 하는게 좋겠지만 추후에 
        Note 컴포넌트로 활용할 예정이기 때문에 Note로 명명해 줍시다.*/}
        {/* 배열은 map사용가능(render안에 중괄호는 JS코드) */}
        {this.state.content.map((note, idx) => (
          <Note content={note} key={idx}/>
        ))}
      </div>
    )
  }
}
/*    Writing    class    */
//글을 작성하고 있는 컴포넌트 class
class Writing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: ""
    }
  }
  handleChange = (e) => {
    console.log("changed")
    this.setState({
      userInput: e.target.value
    })
  }
  handleSave = (e) => {
    this.props.save(this.state.userInput)
    e.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSave}>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
        />
        <input type='submit' />
      </form>
    )
  }
}
/*    Note    class    */
//글을 보냈을때 보여지는 class
class Note extends Component {
  render() {
    const content = this.props.content
    return (
      <div style={{ padding: 10 }}>
        {/* 각각의 list item 들을 " " 로 연결시킵니다. */}
        {content}
      </div>
    )
  }
}
/*
<과제>
#######1 error solve
Warning: Each child in an array or iterator should have a unique "key" prop.
->배열이나 반복되는 각 자식들은 반드시 유니크한 키 prop를 가져야함
(error 참고 :https://code.i-harness.com/ko-kr/q/1b045a6 )
Check the render method of `App`. See https://fb.me/react-warning-keys for more information.
    in Note (at App.js:34)
    in App (at src/index.js:6)
#######2 week
실습
#######3
만들고 싶은거 구현하고 올수록 feedback할게 있다.
*/
export default App
