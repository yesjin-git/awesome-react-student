import React, { Component } from "react";
import PropTypes from "prop-types";

class Note extends Component {
  state = {
    id: this.props.id,
    title: this.props.title,
    content: this.props.content,
    editMode: false
  };

  handleClickDelete = e => {
    e.preventDefault();
    this.props.delete(this.props.id);
  };

  handleClickEditMode = e => {
    this.setState({
      editMode: true
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSave = e => {
    e.preventDefault();
    this.props.save(this.state);

    setTimeout(() => {
      this.setState({
        editMode: false
      });
    }, 200);
  };

  render() {
    const { title, content } = this.props;
    const { editMode } = this.state;
    const {
      handleClickDelete,
      handleClickEditMode,
      handleChange,
      handleSave
    } = this;

    return (
      <div className="Note col s12 m6 l4" onClick={handleClickEditMode}>
        <div className="card light-green darken-3">
          <h5 className="card-content white-text">
            {!editMode && <span>{title}</span>}
            <i
              className="material-icons right waves-effect waves-yellow"
              onClick={handleClickDelete}
            >
              close
            </i>
            {editMode && (
              <input
                type="text"
                name="title"
                className="white-text"
                defaultValue={title}
                onChange={handleChange}
              />
            )}
          </h5>
          <div className="card-content white-text">
            {!editMode && `${content}`}
            {editMode && (
              <input
                type="text"
                name="content"
                className="white-text"
                defaultValue={content}
                onChange={handleChange}
              />
            )}
          </div>

          {editMode && (
            <div className="card-action">
              <button className="btn lime darken-3" onClick={handleSave}>
                save
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

Note.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  delete: PropTypes.func.isRequired
};

export default Note;
