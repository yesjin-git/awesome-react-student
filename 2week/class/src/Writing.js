import React, {Component} from "react"

class Writing extends Component {
    constructor(props) {
      super(props)
      this.state = {
        title: "",
        content: "이 곳에 입력해주세요."
      }
    }
  
    handleChange = (e) => {
      console.log("changed")
      console.log(e);
      console.log(e.target);
      // (2019.10.26) setState 키보드를 입력 할 때 마다 이벤트(e)를 받아 input안의 value 값을 받아온다
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  
    handleSubmit = (e) => {
      this.props.save(this.state);
      this.setState({
          title: "",
          content: ""
      });
      e.preventDefault(); // (2019.10.26) onSubmit 했을 때 화면이 새로고침(원치 않는 이벤트)를 방지한다.
    }
  
  
    resetContent = () => {
      setTimeout(() => {
        this.setState({
          content: ""
        });
      }, 4000)
    }
    
    componentDidMount() {
      this.resetContent();
    }
  
    render() {
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <div className='input-field'>
            <input
              type='text'
              name='title'
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>

          <div className='input-field'>
            <input
              type='text'
              name='content'
              value={this.state.content}
              onChange={this.handleChange}
            />
          </div>

          <input type='submit' value='작성' />
        </form>
      </div>
      )
    }
  }

export default Writing;