import React, {Component} from 'react';




class Writing extends Component {
    constructor(props) {
      super(props)
      this.state = {
        content: "",
        title:"",
        isWritingTitleFocused: false
      }
    }
    

    handleChange = ({target}) => {
      
      this.setState({[target.name]: target.value});
      
      //input태그에 name을 각각 content, title 이렇게 부여해놓으면 대괄호를 활용하여 접근 가능.
      
    }
    
    handleSubmit = (e) => {
      const writing = this.state;
      this.props.save(writing);
      
      this.setState({
        title: "",
        content: ""
      });

      e.preventDefault();
    }
    
    handleFocus = (e) => {
      if(!this.state.isWritingTitleFocused) {
        this.setState({
          isWritingTitleFocused: true
        });
      } else if(!this.state.isWritingTitleFocused) {
        this.setState({
          isWritingTitleFocused: true
        });
      }
      

    }

    
    //input value는 초기값
    render() {

      const writingTitleProps = {
        title: this.state.title,
        handleChange: this.handleChange,
        handleFocus: this.handleFocus
      }

      const writingContentProps = {
        content: this.state.content,
        handleChange: this.handleChange
      }

      const {isWritingTitleFocused} = this.state;

      const {handleSubmit} = this;

      return (
        <form onSubmit={handleSubmit}>
          <WritingTitle {...writingTitleProps} />
          <br></br>   
          {isWritingTitleFocused && <WritingContent {...writingContentProps}/>}
          <br></br>
          
          <input type='submit'/>

        </form>
      )
    }
  }

  //아래 input태그를 출력하는 컴포넌트들을 Wriging Component의 render()에 선언했었다. 
  //handleChange로 인해 한 글자 입력할때마다 state가 바뀌는데, state가 바뀌면 render함수가 다시 호출되어 리렌더링된다.
  //리렌더링되면 input태그도 다시 그려지니까 한 글자 입력한 채로 다시 input태그가 렌더링되고 input태그 자체가 새로 그려진것이니까 당연히 focus는 사라진다. 
  //그래서 한 글자치고 다시 클릭해서 타이핑해야하는 말도 안 되는 사태가 벌어진다.
  //value값이 state의 title값을 받고 있으므로 타이핑한 한 글자는 다시 그려져도 남아있게 된다..
  const WritingTitle = (props) => {
    return (
      <div className="row">
        <div className="col s12 m6 l4">
          <span>Title</span> 
          <input
          type="text"
          name='title'
          autoComplete="off"
          value={props.title}
          onChange={props.handleChange}
          onFocus={props.handleFocus}
          />
        </div>
      </div>
    )
  }


  const WritingContent = (props) => {
        
    return (
      <div className="row">
        <div className="col s12 m6 l4">
          <span>Content</span> 
          <input
          type='text'
          name='content'
          autoComplete="off"
          value={props.content}
          onChange={props.handleChange}
          />            
        </div>
      </div>
    )
  }
  
  
  export default Writing;