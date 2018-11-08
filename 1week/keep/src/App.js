import React, { Component } from 'react';
import './App.css';

class NoteCard extends Component {
  render() {
    return (
      // gird 설명. s m l 로 나뉨
      <div className="col s12 m4 l3">
        <div className="card yellow lighten-4">
          <div className="card-content black-text">
            <span className="card-title">{this.props.title}</span>
            <p>{this.props.content}</p>
          </div>
        </div>
      </div>
    )
  }
}

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
        { title: 'title1', content: 'defalut' },
        { title: 'title2', content: 'default' }
      ]
    };
    //bind함수를 먹여줘야 render 밑에서 사용 가능.
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //이벤트 개념 가르치기 javascript
  handleChange(event) {
    //name 이라는 property를 넣어서 그것으로 분류한다.
    //[]는 그 안의 값을 key로 사용한다는 뜻이다.  
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.value === '') {
      alert('not submitted');
      //form태그에서 submit 이벤트는 default로 하는 동작이 있음.
      event.preventDefault();
    } else {
      event.preventDefault();
      let savedNote = this.state.savedNote
      //setState 함수는 수정할 필드 이름: 값 으로 입력해야 함.  다른 방식으로 state에 접근하면 안된다. 파라미터로 전달받은 필드를 업데이트 한 후 컴포넌트가 리렌더링 하도록 트리거 한다. 
      this.setState({
        // ... 은 1주차에 설명했음. 
        savedNote: [...savedNote, { title: this.state.title, content: this.state.content }],
        title: '',
        content: ''
      })

    }
  }

  render() {
    //  function과 => 사용하는 것을 자유자제로 할줄 알아야 한다. 
    // map을 사용할 때는 key값이 있어야 한다. 
    const cardList = this.state.savedNote.map(
      (card, index) => (
        <NoteCard key={index} title={card.title} content={card.content} />
      )
    )

    return (
      <div>
        {/* class => className , style ="max-width: 18rem;" => style={{ maxWidth: '18rem'}} */}
        <div className="row" >
          <div className="col s4">
          </div>
          <div className="col s4">
            <div className="input-field">
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                id="autocomplete-input"
                className="autocomplete"
              />
              <label htmlFor="autocomplete-input">Title</label>
            </div>
            <div className="input-field">
              <input
                type="text"
                name="content"
                value={this.state.content}
                onChange={this.handleChange}
                id="autocomplete-input"
                className="autocomplete"
              />
              {/*for => htmlFor 이라고 써야됨  */}
              <label htmlFor="autocomplete-input">Take a note</label>
            </div>
            <input type="submit" value="Submit" onClick={this.handleSubmit} />
          </div>
          <div className="col s4">
          </div>
        </div>
        {/* <form onSubmit={this.handleSubmit}>
              <label>
                 onChange 설명 필요함.
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form> */}
        <div className="row NoteRow">
          {cardList}
        </div>
      </div >
    );
  }
}

export default App;