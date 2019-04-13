import React, {Component} from 'react';




class Writing extends Component {
    constructor(props) {
      super(props)
      this.state = {
        content: "",
        title:"",
        showContent: false
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
        content: "",
        showContent: false
      });

      e.preventDefault();
    }
    
    handleFocus = (e) => {
      const {showContent} = this.state;

      if(!showContent) {
        this.setState({
          showContent: true
        });
      } 
    }

    //relatedTarget -> blur의 경우 눌리는 곳이 relatedTarget
    // title에서 content 입력창으로 넘어올 때 blur event가 먼저 일어나서 정상적으로 동작하지 않게됨.
    //이때 relatedTarget을 사용해서 해결. -> e.relatedTarget === null ? "" : e.relatedTarget.name
    isWriting = (e) => {
      const {content, title} = this.state;

      //조건 1. content나 title에 입력이 있다.
      //조건 2. 둘중에 하나라도 포커스가 있는 경우.
      if(content!=="" || title!=="") return true;
      else return false; 
    }

    handleBlur = (e) => {
     
      
      //relatedTarget은 읽기 전용 엘리먼트에서만 존재하는 event의 프로퍼티이다. 그리고 onblur의 경우에는 사용자가 클릭한 부분이 relatedTarget이 된다. 그래서 현재 코드 상에서 content 입력란을 제외하고는 다른 곳을 클릭하면 relatedTarget은 null이다. 
      if(!this.isWriting(e)){
        const relatedTarget = e.relatedTarget === null ? "null" : e.relatedTarget.name;
        
        //그리고 content input태그에 onFocus이벤트도 있지만 onBlur가 먼저 동작하므로 title 입력란 클릭한 후 content 입력란을 클릭하게 될때, content 입력란이 사라지는 문제가 발생하여 아래와 같이 해결하였다.
        if(relatedTarget !== "content") {
          this.setState({showContent: false});
        }
      } 
    }

    //input value는 초기값
    render() {

      const writingTitleProps = {
        title: this.state.title,
        handleChange: this.handleChange,
        handleFocus: this.handleFocus,
        handleBlur: this.handleBlur
      }

      const writingContentProps = {
        content: this.state.content,
        handleChange: this.handleChange,
        handleBlur: this.handleBlur
      }

      const {showContent} = this.state;

      const {handleSubmit} = this;

      return (
        <form onSubmit={handleSubmit}>
          <WritingTitle {...writingTitleProps} />
          <br></br>   
          {showContent && 
            <WritingContent {...writingContentProps}/>}
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
          onBlur={props.handleBlur}
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
          onFocus={props.handleFocus}
          onBlur={props.handleBlur}
          />            
        </div>
      </div>
    )
  }
  
  
  export default Writing;