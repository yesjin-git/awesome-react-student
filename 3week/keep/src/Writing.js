import React,{Component} from 'react';
class Writing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: '',
      toggleWriting: false
    }
  }
  // 받은 함수를 재정의 해준다. 
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFocus = () => {
    this.setState({
      toggleWriting: true
    })
  }

  handleSubmit = (e) => {
    let note = {
      title: this.state.title,
      content: this.state.content
    }
    if(note.title === '' && note.content === ''){
      alert('not submitted');
    } else{
      this.props.submit(note)
    }
    e.preventDefault();
  }

  render() {
    const writingTitle = (
      <div className="row">
        <form>
          <div id="TitleInput" className="input-field col s10">
            <input
              type="text"
              name="title"
              // 랜더링 할 때 props로 내려받게 된다. 
              value={this.props.title}
              onChange={this.handleChange}
              id="autocomplete-input"
              className="autocomplete"
            />
            <label htmlFor="autocomplete-input">Title</label>
          </div>
          {/* Submit */}
          <div className="SubmitBtn col s2">
            <button className="btn waves-effect waves-light" type="submit" value="Submit" onClick={this.handleSubmit}><i className="material-icons right" style={{marginLeft: 0}}>send</i>
            </button>
          </div>
        </form>
      </div>
    )

    const writingContent = (
      <div className="row" >
        <form>
          <div className="input-field">
            <input
              type="text"
              name="content"
              value={this.props.content}
              onChange={this.handleChange}
              id="autocomplete-input"
              className="autocomplete"
            />
            <label htmlFor="autocomplete-input">Take a note</label>
          </div>
        </form>
      </div>
    )

    return (
      <div>
        <div className="row" >
          <div className="Writing col s10 offset-s1 m6 offset-m3 l4 offset-l4" onFocus={this.handleFocus}>
            {/* Title input onFoucs 상태에서 열리도록 한다. */}
            {this.state.toggleWriting ?
              writingTitle : ""}
            {/* Contnet input */}
            {writingContent}
          </div>
        </div >
      </div >
    );
  }
}

export default Writing;