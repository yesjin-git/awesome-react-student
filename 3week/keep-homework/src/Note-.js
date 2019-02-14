import React, { Component } from "react";
import "./note.css";

class Note extends Component {
  handleClickDelete = () => {
    this.props.delete(this.props.index);
  };

  render() {
    const { title, content } = this.props;
    return (
      <div className="Note col s12 m4 l3">
        <div className="DeleteBtn">
          <div className="DeleteBtn btn-floating btn-large">
            <i
              onClick={this.handleClickDelete}
              id="Icon"
              className="material-icons"
            >
              delete
            </i>
          </div>
        </div>
        <div className="card yellow lighten-4">
          <div className="card-content black-text">
            <span className="card-title">{title}</span>
            <p>{content}</p>
          </div>
        </div>
      </div>
    );
  }
}

function inputIsRequired(props, propName, componentName) {
  if (!props[propName]) {
    return new Error(`${propName} is required`);
  }
  return null;
}

Note.propTypes = {
  title: inputIsRequired,
  content: inputIsRequired
};

export default Note;
