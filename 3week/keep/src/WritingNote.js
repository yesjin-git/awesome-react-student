import React, { Component } from 'react';

class WritingNote extends Component {
  // 받은 함수를 재정의 해준다. 
  handleChange = (e) => {
    this.props.onChange(e.target)
  }

  handleSubmit = (e) => {
    if (this.props.content === '' && this.props.title === '') {
      alert('not submitted');
    } else {
      this.props.onSubmit(this.props)
    }
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="row" >
          <div className="Writing col s10 offset-s1 m6 offset-m3 l4 offset-l4">
            <div className="row">
              {/* Title input */}
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
                <button className="btn waves-effect waves-light" type="submit" value="Submit" onClick={this.handleSubmit}><i className="material-icons right" style={{ marginLeft: 0 }}>send</i>
                </button>
              </div>
            </div>
            <div className="row">
              {/* Contnet input */}
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
            </div>
          </div>
        </div >
      </div >
    );
  }
}

export default WritingNote;