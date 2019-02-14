import React, { Component } from "react";

class Writing extends Component {
  state = {
    title: "",
    content: ""
  };

  handleSubmit = e => {
    this.props.save(this.state);
    this.setState({
      title: "",
      content: ""
    });
    e.preventDefault();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { title, content } = this.state;
    const inputTitle = {
      type: "text",
      name: "title",
      value: title,
      onChange: this.handleChange
    };
    const inputContent = {
      type: "text",
      name: "content",
      value: content,
      onChange: this.handleChange
    };

    return (
      <div className="Writing row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col s12 input-field">
              <input
                id="writing__title"
                className="validate col s10"
                {...inputTitle}
              />
              <label htmlFor="writing__title">Title</label>
              <button
                className="btn col s2 dark-green lighten-1 white-text waves-effect waves-yellow"
                type="submit"
              >
                <span className="hide-on-small-only">Submit</span>
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col s12 input-field">
              <input
                id="writing__content"
                className="validate"
                {...inputContent}
              />
              <label htmlFor="writing_content">Take a note</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Writing;
