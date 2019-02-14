import React, { Component } from "react";

class Writing extends Component {
  state = {
    title: "",
    content: "",
    isWritingFocused: false
  };

  onSubmit = e => {
    e.preventDefault();

    const { title, content } = this.state;
    if (title !== "" && content !== "") {
      this.props.add(this.state);

      this.setState({
        title: "",
        content: "",
        isWritingFocused: false
      });
    }
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  onFocus = e => {
    this.setState({
      isWritingFocused: true
    });
  };

  onBlur = e => {
    const name = e.relatedTarget && e.relatedTarget.name;
    const { content, isWritingFocused } = this.state;

    if (
      name !== "title" &&
      name !== "content" &&
      name !== "submit" &&
      content === "" &&
      isWritingFocused
    ) {
      setTimeout(() => {
        this.setState({
          isWritingFocused: false
        });
      }, 500);
    }
  };

  render() {
    const { title, content, isWritingFocused } = this.state;
    const { onSubmit, onChange, onFocus, onBlur } = this;

    const writingTitleProps = {
      title,
      onChange,
      onFocus,
      onBlur
    };

    const writingContentProps = {
      content,
      onChange,
      onFocus,
      onBlur
    };

    return (
      <form className="Writing" onSubmit={onSubmit}>
        <div className="row">
          <div className="col s12 input-field">
            <WritingTitle {...writingTitleProps} className="validate col s10" />
            <button
              tabIndex="-1"
              name="submit"
              className="btn col s2 lime darken-3 white-text waves-effect waves-yellow"
              type="submit"
            >
              <span className="hide-on-small-only">Submit</span>
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col s12 input-field">
            {isWritingFocused && (
              <WritingContent {...writingContentProps} className="validate" />
            )}
          </div>
        </div>
      </form>
    );
  }
}

function WritingTitle({ title, onChange, onFocus, onBlur, className }) {
  return (
    <>
      <input
        type="text"
        name="title"
        value={title}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={className}
        id="writing__title"
      />
      <label htmlFor="writing__title">Title</label>
    </>
  );
}

function WritingContent({ content, onChange, onFocus, onBlur, className }) {
  return (
    <>
      <input
        type="text"
        name="content"
        value={content}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={className}
        id="writing__content"
      />
      <label htmlFor="writing_content">Take a note</label>
    </>
  );
}

export default Writing;
