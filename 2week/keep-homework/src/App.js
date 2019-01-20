import React,{Component} from "react"
import "materialize-css"
import "materialize-css/dist/css/materialize.min.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      savedNotes: [
        {
          id: 1,
          title: 'title1',
          content: "default1"
        },
        {
          id: 2,
          title: 'title2',
          content: "default2"
        },
        {
          id:3,
          title: 'title3',
          content: "default3"
        },
      ]
    }
  }

  save = (userInput) => {
    const savedNotes = this.state.savedNotes;
    const id = savedNotes.length + 1;
    this.setState({
      savedNotes: [
        ...savedNotes, 
        {id, ...userInput}
      ]
    })
  }

  render() {
    return (
      <div>
        <Writing save={this.save} />
        <div className='row'>
          {this.state.savedNotes.map((note) => (
            <Note title={note.title} content={note.content} key={note.id} />
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
      title: 'title',
      content: 'test'     
    }
  }

  handleSubmit = (e) => {
    console.log('submitted');
    this.props.save(this.state);
    // 입력값 초기화
    this.setState({     
      title: '',
      content: ''     
    });
    e.preventDefault();
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({      
      [name]: value
    })
  }

  render() {
    const { handleSubmit, handleChange } = this;
    const { title, content } = this.state;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type='text'
              name='title'
              value={title}
              onChange={handleChange}
            />
            <input
              type='text'
              name='content'
              value={content}
              onChange={handleChange}
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
    const {title, content} = this.props;
    return (
      //아래 내용들은 materialize에 있는 라이브러리와 클래스를 활용한 것 입니다.
      //materialize 의 grid부분을 참고해 주세요.
      <div className='col s12 m6 l3'>
        <div className='card yellow lighten-4'>
          <div className='card-title black-text'>
            {title}
          </div>
          <div className='card-content black-text'>
            {content}
          </div>
        </div>
      </div>
    )
  }
}

export default App