import React, { Component } from "react";

class Writing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "awesome",
      content: "react",
      isWritingTitleFocused: false
    };
  }

  handleSubmit = e => {
    this.props.save(this.state);
    this.setState({
      title: "",
      content: "",
      isWritingTitleFocused: false
    });
    e.preventDefault();
  };

  handleChange = event => {
    //key 내부에 []를 쓰면, 내부 자바스크립트를 따라 실행됩니다.
    //곧 이 경우 event.target.name에 접근하게 됩니다.
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleFocus = e => {
    if (!this.state.isWritingTitleFocused) {
      console.log("test");
      this.setState({
        isWritingTitleFocused: true
      });
    }
  };

  render() {
    const writingTitleProps = {
      title: this.state.title,
      handleChange: this.handleChange,
      handleFocus: this.handleFocus
    };

    const writingContentProps = {
      content: this.state.content,
      handleChange: this.handleChange
    };

    const { isWritingTitleFocused } = this.state;
    const { handleSubmit } = this;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <WritingTitle {...writingTitleProps} />
          {isWritingTitleFocused && <WritingContent {...writingContentProps} />}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

function WritingTitle(props) {
  return (
    <div className="input-field">
      <input
        type="text"
        name="title"
        value={props.title}
        onChange={props.handleChange}
        onFocus={props.handleFocus}
      />
    </div>
  );
}

function WritingContent(props) {
  return (
    <div className="input-field">
      <input
        type="text"
        name="content"
        value={props.content}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default Writing;
