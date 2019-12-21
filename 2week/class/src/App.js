import React, {Component} from "react"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //state의 초기값을 설정합니다.
      savedNotes: [
        {id: 0, title:"test1", content: "default1"},
        {id: 1, title:"test2", content: "default2"}
        ]
    }
  }

  save = ({title, content}) => {
    //설계한 함수의 상태를 확인하기 위해 save를 표시하도록 해봅시다.
    console.log(title + ":" + content+ " is saved");

    const {savedNotes} = this.state; //const savedNotes = this.state.savedNotes
    const lastNoteId = savedNotes.length != 0 ? savedNotes[savedNotes.length - 1].id : 0

    this.setState({
      savedNotes: [
        ...savedNotes, //map을 풀어해쳐서 넣는다.
        {id: lastNoteId + 1, title:title, content: content}
      ]
    })
  };

  delete = (id) => {
    const {savedNotes} = this.state
    const deletedNotes = savedNotes.filter((note, index) => note.id != id);
    console.log("delete");
    this.setState({
        savedNotes: [...deletedNotes]}
    )

  }

  render() {
    return (
      <div className='App'>
        <Writing save={this.save} />
        {/* 원래 노트를 여러개 보내므로, Notes라고 하는게 좋겠지만 추후에 Note 컴포넌트로 활용할 예정이기 때문에 Note로 명명해 줍시다.*/
          this.state.savedNotes.map((note, index) => (
              <Note title={note.title} content={note.content} key={note.id} del={this.delete} id={note.id} />
          ))
        }
      </div>
    )
  }
}

class Writing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      content: "",
      showTitle: false
    }
  }

  handleChange = (e) => {
    console.log("changed");
    this.setState(
        {
          [e.target.name]: e.target.value
        });

    // e는 사용하는 시점에 null로 세팅 그전에 아래와 같이 새로운 객체를 생성한다.
    // console.log({...e})
    console.log({...e})
  };

  // handleChange2 = (e) => {
  //   console.log("changed");
  //   this.setState({
  //     content: e.target.value
  //   });
  //   // e는 사용하는 시점에 null로 세팅 그전에 아래와 같이 새로운 객체를 생성한다.
  //   // console.log({...e})
  //   console.log({...e})
  // };

  handleSubmit = (e) => {
    this.props.save(this.state);
    // 이렇게 refresh를 막는다.
    e.preventDefault()
  };

  handleContentFocus = (e) => {
    this.setState({
      showTitle:true
        }
    )
  }

  render() {
    const {showTitle} = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        {
          showTitle ? (
              <input
                  type='text'
                  name='title'
                  value={this.state.title}
                  onChange={this.handleChange}
              />
          ) : (<></>)
        }
        <input
            type='text'
            name='content'
            value={this.state.content}
            onFocus={this.handleContentFocus}
            onChange={this.handleChange}
        />
        <input type='submit' />
      </form>
    )
  }
}

class Note extends Component {
  handleDelete = (e) => {
    this.props.del(this.props.id)
  }

  render() {
    const {title, content} = this.props;

    return (
        <div className="Note col s12 m4 l3">
          <div className="DeleteBtn">
            <div className="DeleteBtn btn-floating btn-large" onClick={this.handleDelete}>
              <i id="Icon" className="material-icons">delete</i>
            </div>
          </div>
          <div className="card yellow lighten-4">
            <div className="card-content black-text">
          <span className="card-title">
            {title}
          </span>
              <p>{content}</p>
            </div>
          </div>

        </div>
    )
  }
}

export default App
