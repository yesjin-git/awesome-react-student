import React, { Component } from 'react';

class Writing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      writeTitle: "title",
      writeContent: "test",
      showContent: false
    }
  }

  handleSubmit = (e) => {
    const { writeTitle, writeContent } = this.state;
    if(writeTitle.trim() === '' || writeContent.trim() === ''){
      alert('내용을 입력해주세요');
      e.preventDefault();
      return;
    }
    this.props.save(this.state);
    this.setState({
      writeTitle: '',
      writeContent: '',      
      showContent: false
    });
    e.preventDefault();
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleFocus = (e) => {   
    if(!this.state.showContent){
      this.setState({
        showContent: true
      })
    }
  }

  handleBlur = (e) => {
    const { relatedTarget: next } = e;
    const { name, value } = e.target;
    const { writeContent } = this.state;

    // title에서 포커스 아웃
    if(name === 'writeTitle'){
      //title -> content로 포커스 이동한 경우
      if(next && next.name === 'writeContent'){
        this.setState({
          showContent: true
        })
      } else if(writeContent.trim() === '') {
        this.setState({
          showContent: false
        })
      }
    
    // content 에서 포커스 아웃  
    } else {
      if(value.trim() === ''){      
        this.setState({
          showContent: false
        })
      }
    }
  }

  render() {
    const { showContent, writeTitle, writeContent } = this.state;
    const { handleChange, handleFocus, handleSubmit, handleBlur } = this;

    const writingTitle = (
      <div className="input-field">
        <input
          type='text'
          name='writeTitle'
          value={writeTitle}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    )

    const writingContent = (
      <div className="input-field">
        <input
          type='text'
          name='writeContent'
          value={writeContent}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
    )

    return (
        <div>
          <form onSubmit={handleSubmit}>
            {writingTitle}
            {showContent && writingContent}                
              <input
                type='submit'
                value='Submit'
              />
          </form>
        </div>
    )
  }
}

export default Writing;