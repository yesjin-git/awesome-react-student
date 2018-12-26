import React, { Component } from 'react';
import './App.css';
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
// 함수형 컴포넌트 생성.
class App extends Component {
  constructor(props) {
    //constructor를 직접 쓰려면, 반드시 super를 써야 한다. super에서 props를 인자로 갖으므로, constructor를 쓸때 props를 써줘야 한다. 
    super(props);
    //state 초기값을 설정한다.
    this.state = {
      content: '이곳에 값을 입력해 주세요.',
      savedNote: [
        { content: 'default' },
        { content: 'default' }
      ]
    };
    //bind함수를 먹여줘야 render 밑에서 사용 가능.
    this.handleChange = this.handleChange.bind(this);
    //handleSubmit은 bind를 쓰지 않고 작업
    //this.handleSubmit = this.handleSubmit.bind(this);
  }
  //이벤트 개념 가르치기 javascript
  handleChange(event) {
    //name 이라는 property를 넣어서 그것으로 분류한다.
    //[]는 그 안의 값을 key로 사용한다는 뜻이다.
    this.setState({ [event.target.name]: event.target.value });
  }
  //
  handleSubmit = (event) => {
    if (this.state.value === '') {
      alert('not submitted');
      //form태그에서 submit 이벤트는 default로 하는 동작이 있음.
    } else {
      let savedNote = this.state.savedNote
      //setState 함수는 수정할 필드 이름: 값 으로 입력해야 함.  다른 방식으로 state에 접근하면 안된다. 파라미터로 전달받은 필드를 업데이트 한 후 컴포넌트가 리렌더링 하도록 트리거 한다. 
      this.setState({
        // ... 은 1주차에 설명했음. 
        savedNote: [...savedNote, { content: this.state.content }],
        content: ''
      })
    }
    event.preventDefault();
  }

  // 이곳에 입력하세요 지우기. setState 실습
  componentDidMount() {
    // callback 함수개념 setInterval로 예약 실행 시키기 setInterval
    setTimeout( () => this.setState({
      content: ""
    }), 4000)

  }

  // 특정 조건에 따라 불러오는 것은 render에 넣으면 안됨, render는 state가 변환될 때 마다 무조건 불러와지는 것. 이므로 비효율이 발생한다.  
  render() {
    //  function과 => 사용하는 것을 자유자제로 할줄 알아야 한다. 
    return (
      <div>
        {/* class => className , style ="max-width: 18rem;" => style={{ maxWidth: '18rem'}} */}
        {/* 노트를 입력하는 곳 입니다.  */}
        <div className="row" >
          {/* offset 개념. */}
          <div className="col s10 offset-s1 m6 offset-m3 l4 offset-l4">
            {/* 과제로 작성해야 하는 파트
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
            </div> */}
            <form>
              <div className="input-field">
                <input
                  type="text"
                  name="content"
                  value={this.state.content}
                  onChange={this.handleChange}
                  id="autocomplete-input"
                  className="autocomplete"
                  maxLength="20"
                />
                {/*for => htmlFor 이라고 써야됨  */}
                <label htmlFor="autocomplete-input">Take a note</label>
              </div>
              <input type="submit" value="Save" onClick={this.handleSubmit} />
            </form>
          </div>
        </div>
        {/* 노트들을 불러옵니다. */}
        {/* CardRow 를 사용해서, 최대 길이를 제한하기 */}
        <div className="row CardRow">
          {/* map을 사용할 때는 key값이 있어야 한다. 두번째 인자를 index라고 한다.   */}
          {this.state.savedNote.map(
            (card, index) => (
              // gird 설명. s m l 로 나뉨
              // key 오류 고치기.
              <div className="col s12 m4 l3" key={index}> {/* <Component key={index} />와 같음*/}
                <div className="card yellow lighten-4" > {/* key={index} 를 이곳에 넣으면 틀림*/}
                  <div className="card-content black-text">
                    <p>{card.content}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}


export default App
